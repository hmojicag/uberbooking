using System.Collections.Generic;
using uberbooking.api.Models;

namespace uberbooking.api.Common {
    public static class UserStorage
    {
        public static List<User> Users { get; set; } = new List<User> {
            new User {Id=0,Email= "user1@something.com",Password = "user1psd", Name="user1", LastName= "Lname1" },
            new User {Id=1,Email="user2@something.com",Password = "user2psd", Name="user2", LastName="Lname2"  },
            new User {Id=2,Email="user3@something.com",Password = "user3psd", Name="user3", LastName="Lname3"  }
        };

    }
}