using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using uberbooking.api.Models;

namespace uberbooking.api.Controllers {
    
    [Route("api/[controller]")]
    public class EventController : Controller {
        
        // GET api/events
        [HttpGet]
        public IEnumerable<Event> GetAll() {
            return sampleEvents;
        }

        private static Event[] sampleEvents = new Event[2];
        public EventController() {
            sampleEvents[0] = new Event();
            sampleEvents[0].Id = 0;
            sampleEvents[0].Name = "Piscina Allen - Reservación";
            sampleEvents[0].Description = "John Doe; 8111653420; Allen # 20; john.doe@gmail.com";
            sampleEvents[0].Place = new Place() {
                Id = 10,
                Name = "Piscina Allen"
            };
            sampleEvents[0].Type = new EventType() {
                Id = 100,
                Name = "Reservacion Piscina"
            };
            sampleEvents[0].StartTime = DateTime.Now;
            sampleEvents[0].EndTime = sampleEvents[0].StartTime.AddHours(3);
            
            sampleEvents[1] = new Event();
            sampleEvents[1].Id = 1;
            sampleEvents[1].Name = "Poda de Cesped - Parque Lineal";
            sampleEvents[1].Description = "Poda de Cesped - Parque Lineal";
            sampleEvents[1].Place = new Place() {
                Id = 11,
                Name = "Parque Lineal"
            };
            sampleEvents[1].Type = new EventType() {
                Id = 101,
                Name = "Poda de Cesped"
            };
            sampleEvents[1].StartTime = DateTime.Now;
            sampleEvents[1].EndTime = sampleEvents[1].StartTime.AddHours(8);
        }
    }
}