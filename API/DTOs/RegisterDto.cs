using System.ComponentModel.DataAnnotations;  //has basic data validations. such as string lenght, email address, phone number

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Username { get; set; }
        
        [Required]
        public string Password { get; set; }
    }
}