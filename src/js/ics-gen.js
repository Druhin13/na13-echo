$(document).ready(function () {
    $("[data-ics-link-gen=true]").on("click", function (event) {
      event.preventDefault();
  
      let hiddenContent = $(this)
        .closest(".calendar-card")
        .find(".calendar-content.hide")
        .text();
  
      let parts = hiddenContent.split(";");
  
      let title = "Echo Community E-waste Collection Day";
      let address = parts[1].trim();
      let date =
        new Date(parts[2].trim())
          .toISOString()
          .replace(/-/g, "")
          .replace(/:/g, "")
          .split(".")[0] + "Z";
      let timings = parts[4].trim();
      let mapLink = parts[3].trim();
  
      // Split timings into start and end times
      let [startTime, endTime] = timings.split(" — ").map((time) => {
        // Convert time to 24-hour format
        let [hour, minutePart] = time.split(":");
        let minute = minutePart.slice(0, 2);
        let period = minutePart.slice(2);
  
        hour = +hour;
        if (period === "PM" && hour < 12) hour += 12;
        if (period === "AM" && hour === 12) hour -= 12;
  
        // Return time in HHmmss format
        return `${hour.toString().padStart(2, "0")}${minute}00`;
      });
  
      // Append times to date
      let startDate = date.slice(0, 8) + "T" + startTime;
      let endDate = date.slice(0, 8) + "T" + endTime;
  
      let icsContent = `BEGIN:VCALENDAR
  VERSION:2.0
  PRODID:-//Echo//E-days//EN
  BEGIN:VEVENT
  UID:${generateUID()}@echotech.co.nz
  DTSTAMP:${
        new Date().toISOString().replace(/-/g, "").replace(/:/g, "").split(".")[0]
      }Z
  DTSTART;TZID=Pacific/Auckland:${startDate}
  DTEND;TZID=Pacific/Auckland:${endDate}
  SUMMARY:${title}
  DESCRIPTION:Address: ${address}\\nTimings: ${timings}
  LOCATION:${address}
  URL:${mapLink}
  END:VEVENT
  END:VCALENDAR`;
  
      let downloadLink = document.createElement("a");
      downloadLink.href =
        "data:text/calendar;charset=utf-8," + encodeURIComponent(icsContent);
      downloadLink.download = "Echo Community E-waste Collection Day.ics";
      downloadLink.click();
    });
  });
  
  function generateUID() {
    return (
      Math.random().toString(36).substring(2) + new Date().getTime().toString(36)
    );
  }
  