using DataFactory;
using ModelFactory.Users;
using System.Linq;

namespace BusinessFactory.Users
{
    public class BALDimMbr : IBALDimMbr
    {
        MyOwnMedContext objMyOwnMedContext;

        public BALDimMbr(MyOwnMedContext _MyOwnMedContext)
        {
            objMyOwnMedContext = _MyOwnMedContext;
        }

        public DimMbr GetMember(int _MemverId)
        {
            return objMyOwnMedContext.entDimMbr.Where(F => F.MbrId == _MemverId).FirstOrDefault();
        }
    }
}
