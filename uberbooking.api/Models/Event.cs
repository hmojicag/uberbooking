using System;

namespace uberbooking.api.Models {
    public class Event {

        public Event() {
            //Default values
            this.Color = "red";
        }
        
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Color { get; set; }
        public EventType Type { get; set; }
        public Place Place { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public bool IsEditable { get; set; }
        public bool IsDeletable { get; set; }
    }
}