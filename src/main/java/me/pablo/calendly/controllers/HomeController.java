package me.pablo.calendly.controllers;

import com.google.api.client.util.DateTime;
import com.google.api.services.calendar.Calendar;
import com.google.api.services.calendar.model.Event;
import com.google.api.services.calendar.model.EventAttendee;
import com.google.api.services.calendar.model.EventDateTime;
import com.google.api.services.calendar.model.EventReminder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Arrays;

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
    public String createEvent(HttpSession session, @RequestParam("startDate") String startDate,
                              @RequestParam("startTime") String startTime) throws IOException {

        System.out.println("Start DAte " + startDate);
        System.out.println("Start Time " + startTime);
        System.out.println(startDate + "T" + startTime);

        Calendar client = (Calendar) session.getAttribute("client");

        Event event = new Event()
                .setSummary("NEW TEST")
                .setLocation("Treasure AC")
                .setDescription("FUN FUN FUN");

        DateTime startDateTime = new DateTime(startDate + "T" + startTime + ":00");
        EventDateTime start = new EventDateTime()
                .setDateTime(startDateTime)
                .setTimeZone("America/Los_Angeles");
        event.setStart(start);
        DateTime endDateTime = new DateTime("2021-06-28T07:00:00");
        EventDateTime end = new EventDateTime()
                .setDateTime(endDateTime)
                .setTimeZone("America/Los_Angeles");
        event.setEnd(end);

        String[] recurrence = new String[]{"RRULE:FREQ=DAILY;COUNT=2"};
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
        event = client.events().insert(calendarId, event).execute();
        System.out.printf("Event created: %s\n", event.getHtmlLink());
        return "redirect:/new/event";
    }

}
