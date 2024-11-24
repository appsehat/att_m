import { View } from "react-native";
import Menu from "@/components/ui/Dashboard/Menu";

export default DashboardMenu = ({ label }) => {
  return (
    <View className="mt-2">
      <View className="flex-row justify-between gap-x-4">
        <View className="flex-1 border-2 border-green-700 justify-center rounded-xl">
          <Menu
            target="/tabs/news"
            icon="newspaper-outline"
            caption={label.NEWS}
          />
        </View>

        <View className="flex-1 border-2 border-green-700 justify-center rounded-xl">
          <Menu
            target="/tabs/course"
            icon="ribbon-outline"
            caption={label.COURSES}
          />
        </View>

        <View className="flex-1 border-2 border-green-700 justify-center rounded-xl">
          <Menu
            target="/tabs/log_book"
            icon="book-outline"
            caption={label.LOG_BOOK}
          />
        </View>
      </View>

      <View className="flex-row justify-between gap-x-4 mt-4">
        <View className="flex-1 border-2 border-green-700 justify-center rounded-xl">
          <Menu
            target={"/tabs/permit"}
            icon="briefcase-outline"
            caption={label.PERMITS}
          />
        </View>

        <View className="flex-1 border-2 border-green-700 justify-center rounded-xl">
          <Menu
            target={"/tabs/over_time"}
            icon="alarm-outline"
            caption={label.OVER_TIMES}
          />
        </View>

        <View className="flex-1 border-2 border-green-700 justify-center rounded-xl">
          <Menu
            target={"/tabs/leave"}
            icon="calendar-outline"
            caption={label.LEAVES}
          />
        </View>
      </View>

      <View className="flex-row justify-between gap-x-4 mt-3">
        <View className="flex-1 border-2 border-green-700 justify-center rounded-xl">
          <Menu
            target={"/tabs/attendance_log"}
            icon="clipboard-outline"
            caption={label.ATTENDANCE_LOGS}
          />
        </View>

        <View className="flex-1 border-2 border-green-700 justify-center rounded-xl">
          <Menu
            target={"/tabs/salary"}
            icon="document-outline"
            caption={label.SALARIES}
          />
        </View>

        <View className="flex-1 border-2 border-green-700 justify-center rounded-xl">
          <Menu
            target={"/tabs/resume"}
            icon="paper-plane-outline"
            caption={label.RESUMES}
          />
        </View>
      </View>
    </View>
  );
};
