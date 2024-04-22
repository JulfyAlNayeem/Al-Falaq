import { MdColorLens } from "react-icons/md";
import { accordionDetails, accordionSummaryOne, cardClass, iconColor, secondColor, themeImg } from "../../constant/index";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import PersonCard from "../card/PersonCard";
import PersonRequest from "../card/PersonRequest";
import chatActive from "../../assets/icons/chatactive.svg";

import { useChatContext } from "../../context-reducer/ChatContext";
export default function ActivePersonList() {
  const [open, setOpen] = React.useState(false);
  const { themeIndex } = useChatContext();
  const style = {
    position: "absolute",
    top: "5%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Banana",
    "Orange",
    "Banana",
    "Orange",
    "Banana",
    "Orange",
    "Banana",
    "Orange",
  ];
  return (
    <>
      <div className=" relative  cursor-pointer" onClick={() => setOpen(true)}>
        <img src={chatActive} className="size-6" alt="" />
        <p
          className={`${
            iconColor[themeIndex.value]
          } absolute top-1  right-2 text-xs font-bold`}
        >
          10
        </p>
      </div>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          height: 400,

          "& .MuiDrawer-paper": {
            background: secondColor[themeIndex.value],
            width: 370,
            p: 1.5,
            borderTopLeftRadius:20,
            borderBottomLeftRadius:20
          },
        }}
      >
        <div className=" h-[99%] overflow-y-scroll">
        <div className=" border-b border-gray-600 pb-2">
          <p className=" w-full  p-2 mb-2 text-gray-400 rounded-md" style={{backgroundColor:accordionDetails[themeIndex.value]}}>
            New Entrance Request
          </p>
          <PersonRequest />
        </div>
        <div className=" mt-1">
          <p className=" w-full  p-2 mb-2 text-gray-400 rounded-md" style={{backgroundColor:accordionDetails[themeIndex.value]}}>
            Now Active
          </p>

          {items.map((item) => (
            <PersonCard />
          ))}
        </div>
        </div>
      </Drawer>
    </>
  );
}

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import PersonCard from "../card/PersonCard";
// import PersonRequest from "../card/PersonRequest";

// export default function ActivePersonList({ open, setOpen }) {
//   const toggleDrawer = () => {
//     setOpen(!open);
//   };
//   const items = ['Apple', 'Banana', 'Orange', 'Banana', 'Orange', 'Banana', 'Orange', 'Banana', 'Orange', 'Banana', 'Orange'];

//   return (
//     <div className="  w-fit md:hidden block">
//       <Drawer
//         anchor="right"
//         open={open}
//         onClose={toggleDrawer}
//         sx={{
//           height: 400,
//           "& .MuiDrawer-paper": {
//             width: 320,

//             // height: 550,
//             p: 1,
//             background: "#353647ff",
//             // backgroundImage: "url('/images/loading.svg')",
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//           },
//         }}
//       >
//         {" "}
//         <div className=" border-b border-gray-600 pb-2">
//           <p className=" w-full bg-slate-700 p-2 mb-2 text-gray-400 rounded-md">
//             New Entrance Request
//           </p>
//           <PersonRequest />
//         </div>
//         <div className=" mt-1">
//           <p className=" w-full bg-slate-700 p-2 mb-2 text-gray-400 rounded-md">
//             Now Active
//           </p>

//           {items.map((item)=>(
//             <PersonCard />
//           ))}
//         </div>
//       </Drawer>
//     </div>
//   );
// }

// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';

// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import { FaChevronLeft, FaChevronRight, FaInbox, FaMailchimp } from "react-icons/fa6";

// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })`
//   ${({ theme, open }) => `
//     flexGrow: 1;
//     padding: ${theme.spacing(3)}px;
//     transition: ${theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     })};
//     margin-left: -${drawerWidth}px;
//     ${open &&
//       `
//       transition: ${theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       })};
//       margin-left: 0;
//     `}
//   `}
// `;

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));

// export default function Home() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"

//           >
//             <FaMailchimp className=' text-white'/>
//           </IconButton>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open} >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <FaChevronLeft /> : <FaChevronRight />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />

//         <Divider />
//         <List>
//           {[ 'Spam'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <FaInbox /> : <FaMailchimp />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Main open={open}>
//         <DrawerHeader />
//         <div className='text-white'>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//           enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//           imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//           Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//           Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//           nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//           leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//           feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//           consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//           sapien faucibus et molestie ac.
//         </div>

//       </Main>
//     </Box>
//   );
// }
