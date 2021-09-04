using System;
using System.ComponentModel.DataAnnotations;

namespace ModelFactory.Users
{
    public class PortalUser
    {
        public int MbrId { get; set; }
        [Key]
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string UserPwd { get; set; }
        public string UserFirstName { get; set; }
        public string UserLastName { get; set; }
        //public DateTime CreateTm { get; set; }
    }
}
