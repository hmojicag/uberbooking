namespace uberbooking.api.Models {
    
    /// <summary>
    /// Event types like:
    /// Pool, Mown the lawn, fumigation, house painting
    /// Monthly Meeting
    /// </summary>
    public class EventType {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}