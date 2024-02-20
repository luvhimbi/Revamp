package com.example.chatapprevamp.Controllers;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class MessageController {
    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    public String processMessage(String message) {
        // Process the incoming message
        return "Received: " + message;
    }
}
