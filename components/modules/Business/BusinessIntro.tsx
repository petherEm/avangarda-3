"use client";
import { useState } from "react";
import type React from "react";

import Image from "next/image";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Download,
  Users,
  CalendarIcon,
  Wifi,
  Monitor,
  Coffee,
  Layout,
  Mic,
  Lightbulb,
  Clock,
  ChevronLeft,
  ChevronRight,
  Presentation,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { addMonths, format } from "date-fns";
import { pl, enUS } from "date-fns/locale";
import {
  CONFERENCE_ROOMS,
  ROOM_ARRANGEMENTS,
  BUSINESS_PACKAGES,
  ROOM_RENTALS,
} from "@/constants";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

interface BusinessIntroProps {
  dict: any;
  lang: string;
}

export default function BusinessIntro({ dict, lang }: BusinessIntroProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedRoom, setSelectedRoom] = useState<string>("grand");
  const [selectedArrangement, setSelectedArrangement] =
    useState<string>("theater");
  const [calendarMonth, setCalendarMonth] = useState<Date>(new Date());

  // Helper function for translations
  const t = (key: string) => getNestedValue(dict, key) || key;

  // Date formatting locale
  const dateLocale = lang === "pl" ? pl : enUS;

  // Sample available dates (in a real app, these would come from an API)
  const availableDates = [
    new Date(2025, 5, 5),
    new Date(2025, 5, 6),
    new Date(2025, 5, 7),
    new Date(2025, 5, 12),
    new Date(2025, 5, 13),
    new Date(2025, 5, 19),
    new Date(2025, 5, 20),
    new Date(2025, 5, 26),
    new Date(2025, 5, 27),
    new Date(2025, 6, 3),
    new Date(2025, 6, 4),
    new Date(2025, 6, 10),
    new Date(2025, 6, 11),
    new Date(2025, 6, 17),
    new Date(2025, 6, 18),
    // Adding more dates for the next month
    new Date(2025, 7, 1),
    new Date(2025, 7, 2),
    new Date(2025, 7, 8),
    new Date(2025, 7, 9),
    new Date(2025, 7, 15),
    new Date(2025, 7, 16),
    new Date(2025, 7, 22),
    new Date(2025, 7, 23),
    new Date(2025, 7, 29),
    new Date(2025, 7, 30),
  ];

  // Get the selected room's capacity for the current arrangement
  const getSelectedRoomCapacity = () => {
    const room = CONFERENCE_ROOMS.find((room) => room.id === selectedRoom);
    return room
      ? room.capacity[selectedArrangement as keyof typeof room.capacity]
      : 0;
  };

  // Get the maximum capacity for a room
  const getMaxCapacity = (roomId: string) => {
    const room = CONFERENCE_ROOMS.find((room) => room.id === roomId);
    return room ? Math.max(...Object.values(room.capacity)) : 0;
  };

  // Function to check if a date is in the available dates
  const isDateAvailable = (date: Date) => {
    return availableDates.some(
      (availableDate) =>
        availableDate.getDate() === date.getDate() &&
        availableDate.getMonth() === date.getMonth() &&
        availableDate.getFullYear() === date.getFullYear()
    );
  };

  // Function to navigate to previous month
  const previousMonth = () => {
    setCalendarMonth((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  // Function to navigate to next month
  const nextMonth = () => {
    setCalendarMonth((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  // Helper function to get the appropriate icon for arrangements
  const getArrangementIcon = (type: string): React.ReactNode => {
    switch (type) {
      case "theater":
        return <Users className="h-5 w-5" />;
      case "classroom":
        return <Layout className="h-5 w-5" />;
      case "boardroom":
        return <Users className="h-5 w-5" />;
      case "banquet":
        return <Users className="h-5 w-5" />;
      case "ushape":
        return <Layout className="h-5 w-5" />;
      default:
        return <Users className="h-5 w-5" />;
    }
  };

  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase text-4xl md:text-5xl font-semibold tracking-wider mb-8"
            >
              {t("business.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed"
            >
              {t("business.description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    {t("business.downloadOffer")}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-white rounded-none">
                  <DialogHeader>
                    <DialogTitle>
                      {t("business.downloadForm.title")}
                    </DialogTitle>
                    <DialogDescription>
                      {t("business.downloadForm.description")}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="name" className="text-right font-medium">
                        {t("business.downloadForm.fullName")}
                      </label>
                      <input
                        id="name"
                        className="col-span-3 flex h-10 w-full border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label
                        htmlFor="company"
                        className="text-right font-medium"
                      >
                        {t("business.downloadForm.company")}
                      </label>
                      <input
                        id="company"
                        className="col-span-3 flex h-10 w-full border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="email" className="text-right font-medium">
                        {t("business.downloadForm.email")}
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="col-span-3 flex h-10 w-full border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="phone" className="text-right font-medium">
                        {t("business.downloadForm.phone")}
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="col-span-3 flex h-10 w-full border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">
                      {t("business.downloadForm.download")}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="outline" className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                {t("business.checkAvailability")}
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative aspect-video w-full overflow-hidden"
          >
            <Image
              src="/conference/conf-03.webp"
              alt={t("business.title")}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Conference Rooms Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            {/* <Presentation className="h-7 w-7 text-avangarda" /> */}
            <h2 className="text-3xl font-semibold text-center">
              {t("business.roomsTitle")}
            </h2>
          </div>

          <p className="text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            {t("business.roomsDescription")}
          </p>

          <Tabs
            defaultValue="grand"
            className="w-full"
            onValueChange={setSelectedRoom}
          >
            <TabsList className="w-full max-w-xl mx-auto mb-8 bg-white p-1 flex overflow-x-auto no-scrollbar">
              {CONFERENCE_ROOMS.map((room) => (
                <TabsTrigger
                  key={room.id}
                  value={room.id}
                  className="flex-1 min-w-[100px] data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-avangarda/90 rounded-none whitespace-nowrap px-2"
                >
                  {t(room.nameKey)}
                </TabsTrigger>
              ))}
            </TabsList>

            {CONFERENCE_ROOMS.map((room) => (
              <TabsContent key={room.id} value={room.id} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-semibold">
                          {t(room.nameKey)}
                        </h3>
                        <Badge className="bg-pink-100 text-avangarda rounded-none">
                          {t(room.sizeKey)}
                        </Badge>
                      </div>
                      <p className="text-lg leading-relaxed">
                        {t(room.descriptionKey)}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="bg-pink-50 p-4 text-center">
                        <Monitor className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                        <p className="text-sm font-medium">
                          {t("business.roomInfo.screens")}
                        </p>
                        <p className="text-xs">
                          {t("business.roomInfo.screensInfo")}
                        </p>
                      </div>

                      <div className="bg-pink-50 p-4 text-center">
                        <Wifi className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                        <p className="text-sm font-medium">
                          {t("business.roomInfo.wifi")}
                        </p>
                        <p className="text-xs">
                          {t("business.roomInfo.wifiInfo")}
                        </p>
                      </div>

                      <div className="bg-pink-50 p-4 text-center">
                        <Mic className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                        <p className="text-sm font-medium">
                          {t("business.roomInfo.audio")}
                        </p>
                        <p className="text-xs">
                          {t("business.roomInfo.audioInfo")}
                        </p>
                      </div>

                      <div className="bg-pink-50 p-4 text-center">
                        <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                        <p className="text-sm font-medium">
                          {t("business.roomInfo.capacity")}
                        </p>
                        <p className="text-xs">
                          {t("business.roomInfo.capacityInfo")}{" "}
                          {getMaxCapacity(room.id)}{" "}
                          {t("business.arrangements.people")}
                        </p>
                      </div>

                      <div className="bg-pink-50 p-4 text-center">
                        <Lightbulb className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                        <p className="text-sm font-medium">
                          {t("business.roomInfo.lighting")}
                        </p>
                        <p className="text-xs">
                          {t("business.roomInfo.lightingInfo")}
                        </p>
                      </div>

                      <div className="bg-pink-50 p-4 text-center">
                        <Coffee className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                        <p className="text-sm font-medium">
                          {t("business.roomInfo.catering")}
                        </p>
                        <p className="text-xs">
                          {t("business.roomInfo.cateringInfo")}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">
                        {t("business.roomInfo.equipment")}
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {room.featuresKeys.map((featureKey, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                            <span className="text-sm">{t(featureKey)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={room.image || "/placeholder.svg"}
                        alt={t(room.nameKey)}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="bg-gray-50 p-4">
                      <h4 className="font-medium mb-3">
                        {t("business.arrangements.layoutTitle")}
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {Object.entries(room.capacity).map(
                          ([layout, capacity]) => (
                            <div
                              key={layout}
                              className={`p-3 text-center cursor-pointer transition-all ${
                                selectedArrangement === layout
                                  ? "bg-pink-100 border-2 border-pink-300"
                                  : "bg-white border border-gray-200 hover:border-avangarda"
                              }`}
                              onClick={() => setSelectedArrangement(layout)}
                            >
                              <p className="text-xs uppercase font-medium text-gray-500">
                                {t(`business.arrangements.icons.${layout}`)}
                              </p>
                              <p className="text-lg font-semibold">
                                {capacity}
                              </p>
                              <p className="text-xs">
                                {t("business.arrangements.people")}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Room Arrangements Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 bg-gray-50 p-8"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            {/* <Layout className="h-7 w-7 text-avangarda" /> */}
            <h2 className="text-3xl font-semibold text-center">
              {t("business.arrangementTitle")}
            </h2>
          </div>

          <p className="text-center max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
            {t("business.arrangementDescription")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {ROOM_ARRANGEMENTS.map((arrangement) => (
              <Card
                key={arrangement.type}
                className={`cursor-pointer transition-all rounded-none ${
                  selectedArrangement === arrangement.type
                    ? "border-2 border-avangarda"
                    : ""
                }`}
                onClick={() => setSelectedArrangement(arrangement.type)}
              >
                <CardContent className="p-4 text-center">
                  <div className="h-12 flex items-center justify-center mb-2">
                    {getArrangementIcon(arrangement.type)}
                  </div>
                  <h3 className="font-medium capitalize mb-1">
                    {t(`business.arrangements.icons.${arrangement.type}`)}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {t(arrangement.descriptionKey)}
                  </p>
                  <p className="text-xl font-semibold">
                    {getSelectedRoomCapacity()}
                  </p>
                  <p className="text-xs text-gray-500">
                    {t("business.arrangements.people")}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative aspect-[21/9] w-full overflow-hidden mb-6">
            <Image
              src="/conference/conf-03.webp"
              alt={`${t(`business.arrangements.icons.${selectedArrangement}`)}`}
              fill
              className="object-cover"
            />
          </div>

          <div className="text-center">
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              {t("business.downloadPlans")}
            </Button>
          </div>
        </motion.div>

        {/* Availability Calendar Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            {/* <CalendarIcon className="h-7 w-7 text-avangarda" /> */}
            <h2 className="text-3xl font-semibold text-center">
              {t("business.availabilityTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-medium mb-4">
                {t("business.checkAvailability")}
              </h3>
              <p className="mb-6 leading-relaxed">
                {t("business.availabilityDescription")}
              </p>

              {/* Two-month calendar view */}
              <div className="bg-white p-4 shadow-sm mb-6">
                <div className="flex justify-between items-center mb-4">
                  <Button variant="outline" size="sm" onClick={previousMonth}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <h3 className="text-lg font-medium">
                    {format(calendarMonth, "MMMM yyyy", { locale: dateLocale })}
                    {" - "}
                    {format(addMonths(calendarMonth, 1), "MMMM yyyy", {
                      locale: dateLocale,
                    })}
                  </h3>
                  <Button variant="outline" size="sm" onClick={nextMonth}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First month */}
                  <div>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      month={calendarMonth}
                      className="mx-auto"
                      locale={dateLocale}
                      modifiers={{
                        available: (date) => isDateAvailable(date),
                      }}
                      modifiersClassNames={{
                        available:
                          "bg-green-100 text-green-900 hover:bg-green-200",
                      }}
                      disabled={(date) =>
                        !isDateAvailable(date) || date < new Date()
                      }
                      fromDate={new Date()}
                      hideMonthNavigation={true}
                    />
                  </div>

                  {/* Second month */}
                  <div>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      month={addMonths(calendarMonth, 1)}
                      className="mx-auto"
                      locale={dateLocale}
                      modifiers={{
                        available: (date) => isDateAvailable(date),
                      }}
                      modifiersClassNames={{
                        available:
                          "bg-green-100 text-green-900 hover:bg-green-200",
                      }}
                      disabled={(date) =>
                        !isDateAvailable(date) || date < new Date()
                      }
                      fromDate={new Date()}
                      hideMonthNavigation={true}
                    />
                  </div>
                </div>
              </div>

              {date && (
                <div className="bg-pink-50 p-4">
                  <h4 className="font-medium mb-2">
                    {t("business.selectedDate")}:{" "}
                    {date.toLocaleDateString(lang === "pl" ? "pl-PL" : "en-US")}
                  </h4>
                  <p className="mb-4">{t("business.roomAvailable")}</p>
                  <div className="flex gap-3">
                    <Button size="sm">{t("business.reserveRoom")}</Button>
                    <Button variant="outline" size="sm">
                      {t("business.inquireDetails")}
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-avangarda" />
                  {t("business.packages.title")}
                </h3>
                <div className="space-y-4">
                  {BUSINESS_PACKAGES.map((pkg, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center pb-2 ${
                        index < BUSINESS_PACKAGES.length - 1 ? "border-b" : ""
                      }`}
                    >
                      <div>
                        <h4 className="font-medium">{t(pkg.nameKey)}</h4>
                        <p className="text-sm text-gray-600">
                          {t(pkg.descriptionKey)}
                        </p>
                      </div>
                      <p className="font-semibold">{t(pkg.priceKey)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-avangarda" />
                  {t("business.rentals.title")}
                </h3>
                <div className="space-y-4">
                  {ROOM_RENTALS.map((rental, index) => {
                    const room = CONFERENCE_ROOMS.find(
                      (r) => r.id === rental.roomId
                    );
                    return (
                      <div
                        key={index}
                        className="flex justify-between items-center pb-2 border-b"
                      >
                        <div>
                          <h4 className="font-medium">
                            {room ? t(room.nameKey) : rental.roomId}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {room ? t(room.sizeKey) : ""}
                          </p>
                        </div>
                        <p className="font-semibold">{t(rental.priceKey)}</p>
                      </div>
                    );
                  })}
                  <p className="text-sm text-gray-500">
                    {t("business.rentals.note")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
