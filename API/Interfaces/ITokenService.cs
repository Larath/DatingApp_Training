using API.Entities;

namespace API.Interfaces //interface is a contract between itself and anything that calls it
{
    public interface ITokenService  //must be of type interface
    {
        public string CreateToken(AppUser user);
    }
}