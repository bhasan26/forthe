import React from 'react';

export interface Beer {
  name: string;
  style: string;
  abv: string;
  description: string;
  imageUrl: string;
}

export interface Event {
  date: string;
  day: string;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  // FIX: Replaced JSX.Element with React.ReactNode to resolve the "Cannot find namespace 'JSX'" error.
  icon: React.ReactNode;
}

export interface FoodItem {
  name: string;
  description: string;
  imageUrl: string;
}
