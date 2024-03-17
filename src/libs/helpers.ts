import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateURL = (url: string) => {
  let isValid = true;
  let error = "";
  if (url) {
    if (/^(https|http)/i.test(url)) {
      if (url.indexOf("http://localhost:3000") >= 0) {
        isValid = false;
        error = "Tidak menerima localhost";
      }
    } else {
      isValid = false;
      error = "Wajib dimulai dengan http atau https";
    }

    try {
      new URL(url);
    } catch {
      isValid = false;
      error = "Gagal melakukan parsing terhadap URL";
    }
  } else {
    isValid = false;
    error = "URL tidak boleh dikosongkan";
  }

  return {
    isValid,
    error,
  };
};

export function formatDate(date: string | Date) {
  // Check if date is valid
  if (!(date instanceof Date)) {
    throw new Error(`Invalid date: ${date}`);
  }

  // Options for formatting the date
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
  };

  // Format the date with locale id-ID
  return new Intl.DateTimeFormat("id-ID", options).format(new Date(date));
}
