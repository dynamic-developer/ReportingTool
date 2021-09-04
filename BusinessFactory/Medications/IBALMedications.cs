using ModelFactory.Medications;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessFactory.Medications
{
    public interface IBALMedications
    {
        List<NonProprietary> GetNonProprietaryDetail(int MamberId, string filter);

        List<Proprietary> GetProprietaryDetail(int MamberId, int DrugSetID, string filter);

        List<NDCManufacturer> GetNDCManufacturerDetail(int MamberId, int DrugSetID , string DosageFormID , string filter);
    }
}
