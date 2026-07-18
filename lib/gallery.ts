export type MediaType = "photo" | "video";

export type Category =
  | "All"
  | "Residential"
  | "Commercial"   
  | "Power Washing"
  | "Gutter Cleaning"
  | "House Washing"
  | "Concrete Cleaning"
  | "Deck Cleaning"
  | "Patio Cleaning"
  | "Window Cleaning"
  | "Parking Garage Cleaning"
  | "Christmas Light Installation";

export interface GalleryItem {
  src: string;
  type: MediaType;
  category: Category[];
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery/residential_1.jpg",
    type: "photo",
    category: ["All", "Residential"],
    alt: "House washing job in Baltimore MD",
  },
    {
    src: "/images/gallery/residential_2.jpg",
    type: "photo",
    category: ["All", "Residential"],
    alt: "House washing job in Baltimore MD",
  },
    {
    src: "/images/gallery/residential_3.jpg",
    type: "photo",
    category: ["All", "Residential"],
    alt: "House washing job in Baltimore MD",
  },
    {
    src: "/images/gallery/residential_4.jpg",
    type: "photo",
    category: ["All", "Residential", "House Washing"],
    alt: "House washing job in Baltimore MD",
  },
    {
    src: "/images/gallery/residential_5.jpg",
    type: "photo",
    category: ["All", "Residential"],
    alt: "House washing job in Baltimore MD",
  },
    {
    src: "/images/gallery/residential_6.jpg",
    type: "photo",
    category: ["All", "Residential", "House Washing"],
    alt: "House washing job in Baltimore MD",
  },
    {
    src: "/images/gallery/residential_7.jpg",
    type: "photo",
    category: ["All", "Residential", "House Washing", "Concrete Cleaning"],
    alt: "House washing job in Baltimore MD",
  },
    {
    src: "/images/gallery/residential_8.jpg",
    type: "photo",
    category: ["All", "Residential", "House Washing",],
    alt: "House washing job in Baltimore MD",
  },
    {
    src: "/videos/gallery/residential_video_1.mp4",
    type: "video",
    category: ["All", "Residential"],
    alt: "House washing job in Baltimore MD",
  },
    {
    src: "/videos/gallery/residential_video_2.mp4",
    type: "video",
    category: ["All", "Residential", "House Washing"],
    alt: "House washing job in Baltimore MD",
  },
    {
    src: "/images/gallery/power_washing_1.jpg",
    type: "photo",
    category: ["All", "Power Washing"],
    alt: "Power washing job in Baltimore MD",
  },
    {
    src: "/images/gallery/power_washing_2.jpg",
    type: "photo",
    category: ["All", "Power Washing"],
    alt: "Power washing job in Baltimore MD",
  },
    {
    src: "/images/gallery/power_washing_3.jpg",
    type: "photo",
    category: ["All", "Power Washing"],
    alt: "Power washing job in Baltimore MD",
  },
    {
    src: "/images/gallery/power_washing_4.jpg",
    type: "photo",
    category: ["All", "Power Washing"],
    alt: "Power washing job in Baltimore MD",
  },
    {
    src: "/images/gallery/power_washing_5.jpg",
    type: "photo",
    category: ["All", "Power Washing"],
    alt: "Power washing job in Baltimore MD",
  },
    {
    src: "/images/gallery/power_washing_6.jpg",
    type: "photo",
    category: ["All", "Power Washing"],
    alt: "Power washing job in Baltimore MD",
  },
    {
    src: "/images/gallery/power_washing_7.jpg",
    type: "photo",
    category: ["All", "Power Washing"],
    alt: "Power washing job in Baltimore MD",
  },
    {
    src: "/images/gallery/power_washing_8.jpg",
    type: "photo",
    category: ["All", "Power Washing"],
    alt: "Power washing job in Baltimore MD",
  },
    {
    src: "/images/gallery/power_washing_9.jpg",
    type: "photo",
    category: ["All", "Power Washing"],
    alt: "Power washing job in Baltimore MD",
  },
    {
    src: "/images/gallery/power_washing_10.jpg",
    type: "photo",
    category: ["All", "Power Washing"],
    alt: "Power washing job in Baltimore MD",
  },
    {
    src: "/images/gallery/power_washing_11.jpg",
    type: "photo",
    category: ["All", "Power Washing"],
    alt: "Power washing job in Baltimore MD",
  },
    {
    src: "/videos/gallery/power_washing_video_1.mp4",
    type: "video",
    category: ["All", "Power Washing"],
    alt: "Power washing job in Baltimore MD",
  },
    {
    src: "/videos/gallery/power_washing_video_2.mp4",
    type: "video",
    category: ["All", "Power Washing"],
    alt: "Power washing job in Baltimore MD",
  },
    {
    src: "/videos/gallery/power_washing_video_3.mp4",
    type: "video",
    category: ["All", "Power Washing"],
    alt: "Power washing job in Baltimore MD",
  },
  {
    src: "/images/gallery/gutter_cleaning_1.jpg",
    type: "photo",
    category: ["All", "Gutter Cleaning"],
    alt: "Gutter cleaning job in Baltimore MD",
  },
  {
    src: "/videos/gallery/deck_cleaning_video_1.mp4",
    type: "video",
    category: ["All", "Deck Cleaning"],
    alt: "Deck cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/window_cleaning_1.jpg",
    type: "photo",
    category: ["All", "Window Cleaning"],
    alt: "Window cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/window_cleaning_2.jpg",
    type: "photo",
    category: ["All", "Window Cleaning"],
    alt: "Window cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/window_cleaning_3.jpg",
    type: "photo",
    category: ["All", "Window Cleaning"],
    alt: "Window cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/window_cleaning_4.jpg",
    type: "photo",
    category: ["All", "Window Cleaning"],
    alt: "Window cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/parking_garage_cleaning_1.jpg",
    type: "photo",
    category: ["All", "Parking Garage Cleaning"],
    alt: "Parking garage cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/parking_garage_cleaning_2.jpg",
    type: "photo",
    category: ["All", "Parking Garage Cleaning"],
    alt: "Parking garage cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/parking_garage_cleaning_3.jpg",
    type: "photo",
    category: ["All", "Parking Garage Cleaning"],
    alt: "Parking garage cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/parking_garage_cleaning_4.jpg",
    type: "photo",
    category: ["All", "Parking Garage Cleaning"],
    alt: "Parking garage cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/parking_garage_cleaning_5.jpg",
    type: "photo",
    category: ["All", "Parking Garage Cleaning"],
    alt: "Parking garage cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/parking_garage_cleaning_6.jpg",
    type: "photo",
    category: ["All", "Parking Garage Cleaning"],
    alt: "Parking garage cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/parking_garage_cleaning_7.jpg",
    type: "photo",
    category: ["All", "Parking Garage Cleaning"],
    alt: "Parking garage cleaning job in Baltimore MD",
  },
    {
    src: "/videos/gallery/parking_garage_cleaning_video_1.mp4",
    type: "video",
    category: ["All", "Parking Garage Cleaning"],
    alt: "Parking garage cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/lights_1.jpg",
    type: "photo",
    category: ["All", "Christmas Light Installation"],
    alt: "Christmas light installation job in Baltimore MD",
  },
    {
    src: "/images/gallery/lights_2.jpg",
    type: "photo",
    category: ["All", "Christmas Light Installation"],
    alt: "Christmas light installation job in Baltimore MD",
  },
    {
    src: "/images/gallery/lights_3.jpg",
    type: "photo",
    category: ["All", "Christmas Light Installation"],
    alt: "Christmas light installation job in Baltimore MD",
  },
    {
    src: "/images/gallery/lights_4.jpg",
    type: "photo",
    category: ["All", "Christmas Light Installation"],
    alt: "Christmas light installation job in Baltimore MD",
  },
    {
    src: "/images/gallery/lights_5.jpg",
    type: "photo",
    category: ["All", "Christmas Light Installation"],
    alt: "Christmas light installation job in Baltimore MD",
  },
    {
    src: "/images/gallery/lights_6.jpg",
    type: "photo",
    category: ["All", "Christmas Light Installation"],
    alt: "Christmas light installation job in Baltimore MD",
  },
    {
    src: "/images/gallery/lights_7.jpg",
    type: "photo",
    category: ["All", "Christmas Light Installation"],
    alt: "Christmas light installation job in Baltimore MD",
  },
    {
    src: "/images/gallery/lights_8.jpg",
    type: "photo",
    category: ["All", "Christmas Light Installation"],
    alt: "Christmas light installation job in Baltimore MD",
  },
    {
    src: "/images/gallery/lights_9.jpg",
    type: "photo",
    category: ["All", "Christmas Light Installation"],
    alt: "Christmas light installation job in Baltimore MD",
  },
    {
    src: "/images/gallery/lights_10.jpg",
    type: "photo",
    category: ["All", "Christmas Light Installation"],
    alt: "Christmas light installation job in Baltimore MD",
  },
    {
    src: "/images/gallery/lights_11.jpg",
    type: "photo",
    category: ["All", "Christmas Light Installation"],
    alt: "Christmas light installation job in Baltimore MD",
  },
    {
    src: "/images/gallery/lights_12.jpg",
    type: "photo",
    category: ["All", "Christmas Light Installation"],
    alt: "Christmas light installation job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_1.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_2.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_3.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_4.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_5.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_6.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_7.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_8.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_9.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_10.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_11.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_12.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
      {
    src: "/images/gallery/commercial_13.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_14.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_15.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
   {
    src: "/images/gallery/commercial_16.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_17.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_18.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_19.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_20.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_21.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_22.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_23.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_24.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_25.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_26.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/images/gallery/commercial_27.jpg",
    type: "photo",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/videos/gallery/commercial_video_1.mp4",
    type: "video",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/videos/gallery/commercial_video_2.mp4",
    type: "video",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/videos/gallery/commercial_video_3.mp4",
    type: "video",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },
    {
    src: "/videos/gallery/commercial_video_4.mp4",
    type: "video",
    category: ["All", "Commercial"],
    alt: "Commercial cleaning job in Baltimore MD",
  },



  // add more here
];