using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Entities
{
    public class SeparatorInput
    {
        #region InputData
        public int B3 { get; set; }
        public double B7 { get; set; }
        public double B8 { get; set; }
        public double B11 { get; set; }
        public double B14 { get; set; }
        public int B15 { get; set; }
        public double B16 { get; set; }
        public double B18 { get; set; }
        public double B20 { get; set; }
        public double B21 { get; set; }
        public double B23 { get; set; }
        public double B26 { get; set; }
        public double B29 { get; set; }
        public double B30 { get; set; }
        public double B31 { get; set; }
        #endregion

        #region Vessel Data & Sizing Cons
        public double B48 { get; set; }
        /*
        public double B35 { get; set; }
        public double B36 { get; set; }
        public double B37 { get; set; }
        public double B50 { get; set; }
        public double B51 { get; set; }
        public double B54 { get; set; }
        public double B55 { get; set; }
        public double B56 { get; set; }
        public double B57 { get; set; }
        public double B58 { get; set; }
        public double B59 { get; set; }
        public double B60 { get; set; }
        public double B61 { get; set; }
        */

        #endregion

        #region Separation Performance
        public double B68 { get; set; }
        public double B69 { get; set; }
        public double B70 { get; set; }
        public double B71 { get; set; }
        public double B72 { get; set; }
        #endregion

        #region Inlet Device
        public double A108 { get; set; }
        //Rho
        public double C101 { get; set; }
        public double C102 { get; set; }
        public double C103 { get; set; }
        public double C104 { get; set; }
        public double C105 { get; set; }
        //Area change factor for liquid 
        public double E101 { get; set; }
        public double E102 { get; set; }
        public double E103 { get; set; }
        public double E104 { get; set; }
        public double E105 { get; set; }
        //Minimum distance between HLSD 
        //and inlet device
        public double F101 { get; set; }
        public double F102 { get; set; }
        public double F103 { get; set; }
        public double F104 { get; set; }
        public double F105 { get; set; }
        //X2 (inlet device)
        public double G101 { get; set; }
        public double G102 { get; set; }
        public double G103 { get; set; }
        public double G104 { get; set; }
        public double G105 { get; set; }
        //Minimum distance from 
        //inlet device to mist extractor
        public double H101 { get; set; }
        public double H102 { get; set; }
        public double H103 { get; set; }
        public double H104 { get; set; }
        public double H105 { get; set; }
        //Weight
        public double I101 { get; set; }
        public double I102 { get; set; }
        public double I103 { get; set; }
        public double I104 { get; set; }
        public double I105 { get; set; }
        #endregion

        #region Perforated Plates
        public int B113 { get; set; }
        public int B114 { get; set; }
        public int B115 { get; set; }
        //Improvement
        public double C113 { get; set; }
        public double C114 { get; set; }
        public double C115 { get; set; }
        //Eu
        public double D113 { get; set; }
        public double D114 { get; set; }
        public double D115 { get; set; }
        #endregion

        #region Mist Extractor Table
        public double A131 { get; set; }
        public double C123 { get; set; }
        public double C124 { get; set; }
        public double C125 { get; set; }
        public double C126 { get; set; }
        public double C127 { get; set; }
        public double A143 { get; set; }
        public double C136 { get; set; }
        public double C137 { get; set; }
        public double C138 { get; set; }
        public double C139 { get; set; }
        public double A155 { get; set; }
        public double C149 { get; set; }
        public double C150 { get; set; }
        public double C151 { get; set; }
        #endregion

        #region Mist Extractor
        public int B514 { get; set; }
        public int C514 { get; set; }
        #endregion

        #region Main Variables
        /*
        public double H7 { get; set; }
        public double H8 { get; set; }
        public double H9 { get; set; }
        */
        #endregion
    }
}
