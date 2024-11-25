import { useContext, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import DropDownPicker from "react-native-dropdown-picker";
import { Camera } from "expo-camera";

import { AppContext } from "@/components/AppContext";
import AppLabel from "@/components/AppLabel";
import _config from "@/_config.json";

import Layout from "@/components/ui/Layout";
import Loading from "@/components/ui/Loading";

export default function TabAttendance() {
  const value = useContext(AppContext);
  const label = AppLabel[value.LANG];

  const [location, setLocation] = useState(null);
  const [places, setPlaces] = useState([]);

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState("back");
  const [photo, setPhoto] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  const endPoint = "/app/family";
  const [loading, setLoading] = useState(true);
  const [process, setProcess] = useState(false);

  const GOOGLE_PLACES_API_KEY = "AIzaSyCPU3WLjUB-BDEmC-LHB4zgpLeiZsGAmYY";

  const [open, setOpen] = useState(false); // Status dropdown
  const [_value, setValue] = useState(null); // Nilai terpilih
  const [items, setItems] = useState([
    { label: "Absen Masuk", value: "absen_masuk" },
    { label: "Absen Pulang", value: "absen_pulang" },
  ]);

  useEffect(() => {
    (async () => {
      const { statusCamera } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(statusCamera === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  useEffect(() => {
    pageControll();
  }, []);

  const pageControll = async () => {
    setLoading(true);

    try {
      const { statusMap } = await Location.requestForegroundPermissionsAsync();
      if (statusMap !== "granted") {
        alert(
          "Permission Denied",
          "Location permission is required to use this feature."
        );
        setLoading(false);
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);

      fetchNearbyPlaces(
        currentLocation.coords.latitude,
        currentLocation.coords.longitude
      );
    } catch (error) {
      alert("Error", "Failed to fetch location.");
    } finally {
      setLoading(false);
    }
  };

  const takePhoto = async () => {
    if (cameraRef) {
      const photoData = await cameraRef.takePictureAsync();
      setPhoto(photoData.uri);
    }
  };

  const fetchNearbyPlaces = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=500&type=establishment&key=${GOOGLE_PLACES_API_KEY}`
      );
      const data = await response.json();
      if (data.results) {
        setPlaces(data.results);
      }
    } catch (error) {
      Alert.alert("Error", "Failed to fetch nearby places.");
    }
  };

  if (loading) return <Loading />;
  return (
    <Layout title={label.ATTENDANCE}>
      <View className="justify-center items-center">
        <View className="p-1 bg-green-700 rounded-full">
          <Image
            source={{ uri: "https://github.com/octocat.png" }}
            className="w-10 h-10 rounded-full "
          />
        </View>
        <Text className="text-lg text-green-900 font-bold mt-1">
          {"Nama User"}
        </Text>
      </View>

      <View className="mt-3 p-2 bg-gray-50 rounded-lg border border-gray-300">
        <MapView
          className="w-full h-64"
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}
        />
      </View>

      <View className="flex-row justify-between gap-3 mt-1">
        <View className="w-24 justify-center items-center bg-gray-100 border border-gray-300 rounded-xl">
          <Text>{label.TAKE_PICTURE}</Text>
          <Camera
            style={styles.camera}
            type="back"
            ref={(ref) => setCameraRef(ref)}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => takePhoto()} // Trigger take photo action
            >
              <Ionicons name="camera" size={24} color="gray" />
            </TouchableOpacity>
          </Camera>
        </View>

        <View
          style={{
            flex: 1,
            zIndex: 1000, // Tambahkan zIndex di parent container
          }}
          className="p-2 bg-gray-100 border border-gray-300 rounded-xl"
        >
          <Text>{label.ATTENDANCE_TYPE}</Text>
          <DropDownPicker
            className="mt-2"
            style={{
              minHeight: 36,
              borderColor: "gray",
            }}
            open={open} // Status dropdown
            value={_value} // Nilai terpilih
            items={items} // Daftar opsi
            setOpen={setOpen} // Fungsi untuk membuka/menutup
            setValue={setValue} // Fungsi untuk menyimpan nilai terpilih
            setItems={setItems} // Fungsi untuk memperbarui daftar opsi
            direction="top" // Dropdown muncul ke atas
            placeholder={label.SELECT_A_TYPE}
            dropDownContainerStyle={{
              zIndex: 1000, // Pastikan dropdown muncul di atas elemen lain
              borderColor: "gray",
            }}
          />
        </View>
      </View>

      {/* Tombol Process */}
      <TouchableOpacity
        className="justify-center items-center bg-green-700 p-2 mt-3 rounded-xl"
        disabled={process}
        style={{ zIndex: 1 }} // Pastikan tombol memiliki zIndex lebih kecil
      >
        {process ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <Text className="text-lg text-white font-bold">{label.PROCESS}</Text>
        )}
      </TouchableOpacity>
    </Layout>
  );
}
