using Business.Entities;
using SeparatorAPI.Attributes;
using SolverSDK;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SeparatorAPI.Controllers
{
    [AllowCrossSiteJsonAttribute]
    public class SeparatorController : ApiController
    {
        public SeparatorInput Get()
        {
            return GetSeparatorInput();
        }

        public SeparatorResponse Post(SeparatorInput model)
        {
            var se = new SeparatorSizing();
            //UpdateSeparatorSizing(se, model);
            //Todo Solve
            return GetSeparatorResponse(se);
        }

        public void Options(SeparatorInput model)
        {
        }

        private SeparatorInput GetSeparatorInput()
        {
            var se = new SeparatorSizing();
            return new SeparatorInput()
            {
                #region InputData
                B3 =  (int)se.B3,
                B7 = se.B7,
                B8 = se.B8,
                B11 = se.B11,
                B14 = se.B14,
                B15 = (int)se.B15,
                B16 = se.B16,
                B18 = se.B18,
                B20 = se.B20,
                B21 = se.B21,
                B23 = se.B23,
                B26 = se.B26,
                B29 = se.B29,
                B30 = se.B30,
                B31 = se.B31,
                #endregion
                #region Vessel Data & Sizing Cons
                B48 = se.B48,
                #endregion
                #region Separation Performance
                B68 = se.B68,
                B69 = se.B69,
                B70 = se.B70,
                B71 = se.B71,
                B72 = se.B72,
                #endregion
                #region Inlet Device
                A108 = se.A108,
                //Rho
                C101 = se.C101,
                C102 = se.C102,
                C103 = se.C103,
                C104 = se.C104,
                C105 = se.C105,
                //Area change factor for liquid 
                E101 = se.E101,
                E102 = se.E102,
                E103 = se.E103,
                E104 = se.E104,
                E105 = se.E105,
                //Minimum distance between HLSD 
                //and inlet device
                F101 = se.F101,
                F102 = se.F102,
                F103 = se.F103,
                F104 = se.F104,
                F105 = se.F105,
                //X2 (inlet device)
                G101 = se.G101,
                G102 = se.G102,
                G103 = se.G103,
                G104 = se.G104,
                G105 = se.G105,
                //Minimum distance from 
                //inlet device to mist extractor
                H101 = se.H101,
                H102 = se.H102,
                H103 = se.H103,
                H104 = se.H104,
                H105 = se.H105,
                //Weight
                I101 = se.I101,
                I102 = se.I102,
                I103 = se.I103,
                I104 = se.I104,
                I105 = se.I105,
                #endregion
                #region Perforated Plates
                B113 = (int)se.B113,
                B114 = (int)se.B114,
                B115 = (int)se.B115,
                //Improvement
                C113 = se.C113,
                C114 = se.C114,
                C115 = se.C115,
                //Eu
                D113 = se.D113,
                D114 = se.D114,
                D115 = se.D115,
                #endregion
                #region Mist Extractor Table
                A131 = se.A131,
                A143 = se.A143,
                A155 = se.A155,
                #endregion
                #region Mist Extractor
                B514 = (int)se.B514,
                C514 = (int)se.C514,
                #endregion
                #region Main Variables
                /*
                H7 = se.H7,
                H8 = se.H8,
                H9 = se.H9,
                */
                #endregion
            };

        }

        private void UpdateSeparatorSizing(SeparatorSizing se, SeparatorInput si)
        {
            #region InputData
            se.B3 = (SeparatorSizing.Position)si.B3;
            se.B7 = si.B7;
            se.B8 = si.B8;
            se.B11 = si.B11;
            se.B14 = si.B14;
            se.B15 = (SeparatorSizing.BooleanResponse)si.B15;
            se.B16 = si.B16;
            se.B18 = si.B18;
            se.B20 = si.B20;
            se.B21 = si.B21;
            se.B23 = si.B23;
            se.B26 = si.B26;
            se.B29 = si.B29;
            se.B30 = si.B30;
            se.B31 = si.B31;
            #endregion
            #region Vessil Data & Sizing Cons
            se.B48 = si.B48;
            #endregion
            #region siparation Performance
            se.B68 = si.B68;
            se.B69 = si.B69;
            se.B70 = si.B70;
            se.B71 = si.B71;
            se.B72 = si.B72;
            #endregion
            #region Inlet Device
            se.A108 = si.A108;
            //Rho
            se.C101 = si.C101;
            se.C102 = si.C102;
            se.C103 = si.C103;
            se.C104 = si.C104;
            se.C105 = si.C105;
            //Area change factor for liquid 
            se.E101 = si.E101;
            se.E102 = si.E102;
            se.E103 = si.E103;
            se.E104 = si.E104;
            se.E105 = si.E105;
            //Minimum distance between HLSD 
            //and inlet device
            se.F101 = si.F101;
            se.F102 = si.F102;
            se.F103 = si.F103;
            se.F104 = si.F104;
            se.F105 = si.F105;
            //X2 (inlet device)
            se.G101 = si.G101;
            se.G102 = si.G102;
            se.G103 = si.G103;
            se.G104 = si.G104;
            se.G105 = si.G105;
            //Minimum distance from 
            //inlet device to mist extractor
            se.H101 = si.H101;
            se.H102 = si.H102;
            se.H103 = si.H103;
            se.H104 = si.H104;
            se.H105 = si.H105;
            //Weight
            se.I101 = si.I101;
            se.I102 = si.I102;
            se.I103 = si.I103;
            se.I104 = si.I104;
            se.I105 = si.I105;
            #endregion
            #region Perforated Plates
            se.B113 = (SeparatorSizing.BooleanResponse)si.B113;
            se.B114 = (SeparatorSizing.BooleanResponse)si.B114;
            se.B115 = (SeparatorSizing.BooleanResponse)si.B115;
            //Improvement
            se.C113 = si.C113;
            se.C114 = si.C114;
            se.C115 = si.C115;
            //Eu
            se.D113 = si.D113;
            se.D114 = si.D114;
            se.D115 = si.D115;
            #endregion

            #region Mist Extractor Table
            se.A131 = si.A131;
            se.C123 = si.C123;
            se.C124 = si.C124;
            se.C125 = si.C125;
            se.C126 = si.C126;
            se.C127 = si.C127;
            se.A143 = si.A143;
            se.C136 = si.C136;
            se.C137 = si.C137;
            se.C138 = si.C138;
            se.C139 = si.C139;
            se.A155 = si.A155;
            se.C149 = si.C149;
            se.C150 = si.C150;
            se.C151 = si.C151;
            #endregion

            #region Mist Extractor
            se.B514 = (SeparatorSizing.GeneralClassification)si.B514;
            se.C514 = (SeparatorSizing.GeneralClassification)si.C514;
            #endregion

            #region Main Variables
            /*
            se.H7 = si.H7;
            se.H8 = si.H8;
            se.H9 = si.H9;
            */
            #endregion
        }

        private SeparatorResponse GetSeparatorResponse(SeparatorSizing se)
        {
            return new SeparatorResponse()
            {
                #region Calculated Vessel Dimmensions
                H14 = se.H14,
                H15 = se.H15,
                H16 = se.H16,
                H17 = se.H17,
                H18 = se.H18,
                H19 = se.H19,
                H20 = se.H20,
                H21 = se.H21,
                #endregion
                #region Vessel Cost
                H24 = se.H24,
                #endregion
                #region Constraints
                H28 = se.H28,
                H29 = se.H29,
                H30 = se.H30,
                H31 = se.H31,
                H32 = se.H32,
                H33 = se.H33,
                H34 = se.H34,
                H35 = se.H35,
                H36 = se.H36,
                H37 = se.H37,
                H38 = se.H38,
                H39 = se.H39,
                H40 = se.H40,
                H41 = se.H41,
                H42 = se.H42,
                H43 = se.H43,
                H44 = se.H44,
                #endregion
                #region Nozzles
                H51 = se.H51,
                H52 = se.H52,
                H53 = se.H53,
                #endregion
                #region Levels
                H59 = se.H59,
                H60 = se.H60,
                H61 = se.H61,
                H62 = se.H62,
                H63 = se.H63,
                H64 = se.H64,
                #endregion
                #region Separator Performance
                #region Design
                B68 = se.B68,
                B69 = se.B69,
                B70 = se.B70,
                B71 = se.B71,
                B72 = se.B72,
                B75 = se.B75,
                B76 = se.B76,
                B81 = se.B81,
                B88 = se.B88,
                B91 = se.B91,
                #endregion
                #region Actual
                C68 = se.C68,
                C69 = se.C69,
                C70 = se.C70,
                C71 = se.C71,
                C72 = se.C72,
                C73 = se.C73,
                C74 = (int)se.C74,
                C75 = se.C75,
                C76 = se.C76,
                C77 = se.C77,
                C78 = se.C78,
                C79 = se.C79,
                C80 = se.C80,
                C81 = se.C81,
                C82 = se.C82,
                C83 = se.C83,
                C84 = se.C84,
                C85 = se.C85,
                C86 = se.C86,
                C87 = se.C87,
                C88 = se.C88,
                C89 = se.C89,
                C90 = se.C90,
                C91 = se.C91,
                C92 = se.C92,
                #endregion
                #endregion
            };
        }
    }
}
