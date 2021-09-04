using System;
using System.Collections.Generic;
using System.Text;

namespace ModelFactory.Masters
{
    public class LabTypes
    {
        public int Id { get; set; }
        public int MbrId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string UnitTypeName { get; set; }
        public bool HasSecondaryValue { get; set; }
        public int ValueType { get; set; }
        public bool ResultQual { get; set; }
    }
}
