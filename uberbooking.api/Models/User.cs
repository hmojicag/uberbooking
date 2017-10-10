using System;

namespace uberbooking.api.Models {
    public class User {
        public long Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Cellphone { get; set; }
        public string Address { get; set; }
        public string Password { get; set; }
        public bool IsFullUser { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime LastEditTime { get; set; }
    }
}