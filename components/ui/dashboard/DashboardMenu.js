import { View } from "react-native";
import Menu from "@/components/ui/Menu";

export default DashboardMenu = ({ label }) => {
  return (
    <View className="mb-3 flex justify-center items-center py-2">
      <View className="mb-3 flex-row justify-between w-full">
        <Menu
          target={"/tabs/news"}
          icon="newspaper-outline"
          caption={label.NEWS}
        />

        <Menu
          target={"/tabs/course"}
          icon="calendar-outline"
          caption={label.COURSES}
        />

        <Menu
          target={"/tabs/log_book"}
          icon="image-outline"
          caption={label.LOG_BOOK}
        />
      </View>

      <View className="mb-3 flex-row justify-between w-full">
        <Menu
          target={"/tabs/permit"}
          icon="newspaper-outline"
          caption={label.PERMITS}
        />

        <Menu
          target={"/tabs/over_time"}
          icon="calendar-outline"
          caption={label.OVER_TIMES}
        />

        <Menu
          target={"/tabs/leave"}
          icon="image-outline"
          caption={label.LEAVES}
        />
      </View>

      <View className="flex-row justify-between w-full">
        <Menu
          target={"/tabs/attendance_log"}
          icon="newspaper-outline"
          caption={label.ATTENDANCE_LOGS}
        />

        <Menu
          target={"/tabs/salary"}
          icon="calendar-outline"
          caption={label.SALARIES}
        />

        <Menu
          target={"/tabs/resume"}
          icon="image-outline"
          caption={label.RESUMES}
        />
      </View>
    </View>
  );
};
