using System;
using System.Collections.Generic;
using System.Text;

namespace ModelFactory.Labs
{
   public class LabTypeResults
    {
        public string LabType { get; set; }
        public double Mean { get; set; }
        public double? SD { get; set; }
        public double Min { get; set; }
        public double Max { get; set; }
        public int Count { get; set; }
        public double Per { get; set; }
    }
}
