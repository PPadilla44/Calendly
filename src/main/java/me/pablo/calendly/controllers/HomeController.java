package me.pablo.calendly.controllers;

import com.google.api.client.util.DateTime;
import com.google.api.services.calendar.Calendar;
import com.google.api.services.calendar.model.Event;
import com.google.api.services.calendar.model.EventAttendee;
import com.google.api.services.calendar.model.EventDateTime;
import com.google.api.services.calendar.model.EventReminder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Date;

@Controller
public class HomeController {

    @GetMapping("/")
    public String redirectToLogin() {
        return "redirect:/login/google";
    }

    @GetMapping("/calendar")
    public String showCalendar() {
        return "calendar.jsp";
    }

    @GetMapping("/new/event")
    public String showCreateEvent(HttpSession session) {
        if(!(session.getAttribute("client") instanceof Calendar) || session.getAttribute("client") == null) {
            System.out.println("LEAVE");
            return "redirect:/login/google";
        }
        return "createEvent.jsp";
    }

    @PostMapping("/new/event")
    public String createEvent(HttpSession session, @RequestParam("date") String inputDate) throws IOException {

        String justDate = inputDate.substring(0,10);

        String startTime = inputDate.substring(11,13);

        int intStartTime = Integer.parseInt(startTime);
        intStartTime += 1;

        String endTime = intStartTime + "";
        if(intStartTime < 10) {
            endTime = "0" + endTime;
        }

        String inputEndDateTime = justDate + "T" + endTime + ":00:00-07:00";
        inputDate += "-07:00";


        Calendar client = (Calendar) session.getAttribute("client");

        Event event = new Event()
                .setSummary("Island Visit")
                .setLocation("Treasure AC")
                .setDescription("Island visit full of looting!");

        DateTime startDateTime = new DateTime(inputDate);
        EventDateTime start = new EventDateTime()
                .setDateTime(startDateTime)
                .setTimeZone("America/Los_Angeles");

        event.setStart(start);
        DateTime endDateTime = new DateTime(inputEndDateTime);
        EventDateTime end = new EventDateTime()
                .setDateTime(endDateTime)
                .setTimeZone("America/Los_Angeles");
        event.setEnd(end);

        String[] recurrence = new String[]{"RRULE:FREQ=DAILY;COUNT=1"};
        event.setRecurrence(Arrays.asList(recurrence));

        EventAttendee[] attendees = new EventAttendee[]{
                new EventAttendee().setEmail("padilla.pablo1998@gmail.com"),
        };
        event.setAttendees(Arrays.asList(attendees));

        EventReminder[] reminderOverrides = new EventReminder[]{
                new EventReminder().setMethod("email").setMinutes(24 * 60),
                new EventReminder().setMethod("popup").setMinutes(10),
        };
        Event.Reminders reminders = new Event.Reminders()
                .setUseDefault(false)
                .setOverrides(Arrays.asList(reminderOverrides));
        event.setReminders(reminders);

        String calendarId = "primary";
//        event = client.events().insert(calendarId, event).execute();
        System.out.printf("Event created: %s\n", event.getHtmlLink());
        return "redirect:/calendar";
    }

    @GetMapping("/calendar/{date}")
    public String test(@PathVariable("date")String date, Model model) {
        System.out.println(date);
        String sDate1 = date;
        LocalDateTime parsedDate = LocalDateTime.parse(sDate1);
        model.addAttribute("day", parsedDate.getDayOfMonth());
        model.addAttribute("month", parsedDate.getMonth());
        model.addAttribute("time", parsedDate.getHour());

        return "showDate.jsp";
    }

}
