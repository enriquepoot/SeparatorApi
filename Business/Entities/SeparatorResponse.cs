using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Entities
{
    public class SeparatorResponse
    {
        #region Calculated Vessel Dimmensions
        public double H14 { get; set; }
        public double H15 { get; set; }
        public double H16 { get; set; }
        public double H17 { get; set; }
        public double H18 { get; set; }
        public double H19 { get; set; }
        public double H20 { get; set; }
        public double H21 { get; set; }
        #endregion

        #region Vessel Cost
        public double H24 { get; set; }
        #endregion

        #region Constraints
        public double H28 { get; set; }
        public double H29 { get; set; }
        public double H30 { get; set; }
        public double H31 { get; set; }
        public double H32 { get; set; }
        public double H33 { get; set; }
        public double H34 { get; set; }
        public double H35 { get; set; }
        public double H36 { get; set; }
        public double H37 { get; set; }
        public double H38 { get; set; }
        public double H39 { get; set; }
        public double H40 { get; set; }
        public double H41 { get; set; }
        public double H42 { get; set; }
        public double H43 { get; set; }
        public double H44 { get; set; }
        #endregion

        #region Nozzles
        public double H51 { get; set; }
        public double H52 { get; set; }
        public double H53 { get; set; }
        #endregion

        #region Levels
        public double H59 { get; set; }
        public double H60 { get; set; }
        public double H61 { get; set; }
        public double H62 { get; set; }
        public double H63 { get; set; }
        public double H64 { get; set; }
        #endregion

        #region Separator Performance
        #region Design
        public double B68 { get; set; }
        public double B69 { get; set; }
        public double B70 { get; set; }
        public double B71 { get; set; }
        public double B72 { get; set; }
        public double B75 { get; set; }
        public double B76 { get; set; }
        public double B81 { get; set; }
        public double B88 { get; set; }
        public double B91 { get; set; }
        #endregion
        #region Actual
        public double C68 { get; set; }
        public double C69 { get; set; }
        public double C70 { get; set; }
        public double C71 { get; set; }
        public double C72 { get; set; }
        public double C73 { get; set; }
        public int C74 { get; set; }
        public double C75 { get; set; }
        public double C76 { get; set; }
        public double C77 { get; set; }
        public double C78 { get; set; }
        public double C79 { get; set; }
        public double C80 { get; set; }
        public double C81 { get; set; }
        public double C82 { get; set; }
        public double C83 { get; set; }
        public double C84 { get; set; }
        public double C85 { get; set; }
        public double C86 { get; set; }
        public double C87 { get; set; }
        public double C88 { get; set; }
        public double C89 { get; set; }
        public double C90 { get; set; }
        public double C91 { get; set; }
        public double C92 { get; set; }
        #endregion
        #endregion

        #region Extra Data
        public string Error { get; set; }
        #endregion
    }
}
