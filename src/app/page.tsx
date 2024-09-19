'use client';
import {missingProperties} from "../lib/utils";
import NavBar from "./component/NavBar/NavBar";
import Hero from "./component/Hero/Hero";
import Featrues from "./component/Features/Featrues";
import Help from "./component/Help/Help";
import Footer from "./component/Footer/Footer";
import { ScheduleAcallDialog } from "./component/scheduleDialog/ScheduleDialog";
import { useState } from "react";
import { CustomDrawer } from "./component/Drawer/Drawer";


export default function Home() {
  const [scheduleAcallDialog, setscheduleAcallDialog] = useState(false);
  const [customDrawer, setCustomDrawer] = useState(false);
  return (


    <div className="w-full min-h-screen flex flex-col items-center mx-auto">
      <NavBar  open={scheduleAcallDialog} onClose={() => setscheduleAcallDialog(!scheduleAcallDialog)} toggleDrawer={() => setCustomDrawer(!customDrawer)} />
      <Hero />
      <Featrues />
      <Help  onClose={() => setscheduleAcallDialog(!scheduleAcallDialog)} />
      <Footer   onClose={() => setscheduleAcallDialog(!scheduleAcallDialog)}/>
      <CustomDrawer open={customDrawer} toggle={() => setCustomDrawer(!customDrawer)} />
      <ScheduleAcallDialog open={scheduleAcallDialog} onClose={() => setscheduleAcallDialog(!scheduleAcallDialog)} />
    </div>
  );
}
