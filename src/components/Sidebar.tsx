import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarComponentProps  {
  userName: string;
  type?: "admin" |"student";
}
export type { SidebarComponentProps };
export default function Sidebar() {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
      </Box>
      {/* แสดงผู้ใช้งาน */}
      <Box p={10}>
        <Group>
          <Indicator color="red" position="bottom-end" size={10} withBorder offset={6 }>
            <Avatar
              size="md"
              variant="default"
              radius="xl"
              src="https://scontent.fcnx4-2.fna.fbcdn.net/v/t39.30808-6/422910697_24564392106541641_7580726032199215984_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=K5S_qeng0aMQ7kNvwHmLGId&_nc_oc=AdlMIbPMNYAuKBR-k7PRY9gtwz610DlCTHYGyaHc2oxjAr_3G5l24A5AyP4OfB_XMeCzF7tlxrnGwFU0xJRTK3Oj&_nc_zt=23&_nc_ht=scontent.fcnx4-2.fna&_nc_gid=vEVMcA9xBQFC1Uuqlx_Ubw&oh=00_AfUiKbFn78jsLlItRbk5wroj2xN3sjqjU6GTPjDwTR8oog&oe=68BB89A3"
            />
          </Indicator>
          <Text>User : Sitiroj : Student</Text>
        </Group>
      </Box>
    </Stack>
  );
}
