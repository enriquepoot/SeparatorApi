﻿using SolverPlatform;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SolverSdk
{
    public class SeparatorSizing
    {
        public enum Position { N_A = 0, Vertical = 1, Horizontal = 2 }
        public enum GeneralClassification { None = 0, Mesh = 1, Vane, Cyclone }
        public enum BooleanResponse { N_A = 0, N = 1, Y }
        public enum SettlingLaw { OutOfRange = 0, Stokes = 1, Intermediate, Newtons }
        public enum FlowPattern { Stratified = 0, Bubble, Slug, Wave, Annular, Dispersed }

        public double H21
        {
            get
            {
                return B57 * (3.1416 * H16 * H19 / 12 * H17 + 2 * B58 * H20 / 12 * Math.Pow(H16, 2)) + B194 + E182 + H180 + B456 + B473 + B520 + B569 + B541 + C541;
            }
        }

        public double B57 { get; set; }
        public double H16
        {
            get
            {
                return Math.Pow(((Math.Pow(H7, 2) + Math.Pow((H7 + 2 * B56 / 12), 2)) / 2), 0.5);
            }
        }
        public double H19
        {
            get
            {
                return B52 * (H7 * 12 / 2) / (B54 * B55 - 0.6 * B52) + B56;
            }
        }
        public double H17
        {
            get
            {
                //TODO
                return B3 == Position.Vertical ? (B877 + B39 + B40 + B41 + B42 + B43 + B44 + B45 + B46) : (B492 + H8 + B493);
            }
        }
        public double B58 { get; set; }
        public double H20
        {
            get
            {
                //TODO
                return B52 * (H7 * 12) / (2 * B54 * B55 - 0.2 * B52) + B56;
            }
        }
        public double B194
        {
            get
            {
                //FINE
                return VLOOKUP(B181, GetLookupTable(), (B53 == 150 ? 4 : (B53 == 300 ? 5 : (B53 == 600 ? 6 : (B53 == 900 ? 7 : 8)))));
            }
        }

        private double[,] GetLookupTable(int index = 1)
        {
            //TODO
            switch (index)
            {
                case 1:
                default:
                    {
                        return new double[,]{
                            {L165,M165,N165,O165,P165,Q165,R165,S165},
                            {L166,M166,N166,O166,P166,Q166,R166,S166},
                            {L167,M167,N167,O167,P167,Q167,R167,S167},
                            {L168,M168,N168,O168,P168,Q168,R168,S168},
                            {L169,M169,N169,O169,P169,Q169,R169,S169},
                            {L170,M170,N170,O170,P170,Q170,R170,S170},
                            {L171,M171,N171,O171,P171,Q171,R171,S171},
                            {L172,M172,N172,O172,P172,Q172,R172,S172},
                            {L173,M173,N173,O173,P173,Q173,R173,S173},
                            {L174,M174,N174,O174,P174,Q174,R174,S174},
                            {L175,M175,N175,O175,P175,Q175,R175,S175},
                            {L176,M176,N176,O176,P176,Q176,R176,S176},
                            {L177,M177,N177,O177,P177,Q177,R177,S177},
                            {L178,M178,N178,O178,P178,Q178,R178,S178},
                            {L179,M179,N179,O179,P179,Q179,R179,S179},
                            {L180,M180,N180,O180,P180,Q180,R180,S180},
                            };
                    }
                case 2:
                    {
                        return new double[,]{
                            {K165,L165,M165,N165},
                            {K166,L166,M166,N166},
                            {K167,L167,M167,N167},
                            {K168,L168,M168,N168},
                            {K169,L169,M169,N169},
                            {K170,L170,M170,N170},
                            {K171,L171,M171,N171},
                            {K172,L172,M172,N172},
                            {K173,L173,M173,N173},
                            {K174,L174,M174,N174},
                            {K175,L175,M175,N175},
                            {K176,L176,M176,N176},
                            {K177,L177,M177,N177},
                            {K178,L178,M178,N178},
                            {K179,L179,M179,N179},
                            {K180,L180,M180,N180},
                            };
                    }
                case 3:
                    {
                        return new double[,]{
                            {A101,B101,C101,D101,E101,F101,G101,H101,I101},
                            {A102,B102,C102,D102,E102,F102,G102,H102,I102},
                            {A103,B103,C103,D103,E103,F103,G103,H103,I103},
                            {A104,B104,C104,D104,E104,F104,G104,H104,I104},
                            {A105,B105,C105,D105,E105,F105,G105,H105,I105},
                        };
                    }
                case 4:
                    {
                        return new double[,]{
                            {A123,B123,C123,D123,E123,F123,G123,H123,I123,J123,K123,L123,M123,N123,O123},
                            {A124,B124,C124,D124,E124,F124,G124,H124,I124,J124,K124,L124,M124,N124,O124},
                            {A125,B125,C125,D125,E125,F125,G125,H125,I125,J125,K125,L125,M125,N125,O125},
                            {A126,B126,C126,D126,E126,F126,G126,H126,I126,J126,K126,L126,M126,N126,O126},
                            {A127,B127,C127,D127,E127,F127,G127,H127,I127,J127,K127,L127,M127,N127,O127},
                        };
                    }
                case 5:
                    {
                        return new double[,]{
                            {A136,B136,C136,D136,E136,F136,G136,H136,I136,J136,K136,L136,M136,N136,O136},
                            {A137,B137,C137,D137,E137,F137,G137,H137,I137,J137,K137,L137,M137,N137,O137},
                            {A138,B138,C138,D138,E138,F138,G138,H138,I138,J138,K138,L138,M138,N138,O138},
                            {A139,B139,C139,D139,E139,F139,G139,H139,I139,J139,K139,L139,M139,N139,O139}
                        };
                    }
                case 6:
                    {
                        return new double[,]{
                            {A149,B149,C149,D149,E149,F149,G149,H149,I149,J149,K149,L149,M149,N149,O149,P149},
                            {A150,B150,C150,D150,E150,F150,G150,H150,I150,J150,K150,L150,M150,N150,O150,P150},
                            {A151,B151,C151,D151,E151,F151,G151,H151,I151,J151,K151,L151,M151,N151,O151,P151},
                        };
                    }
            }
        }

        private double VLOOKUP(double lookUpValue, double[,] tableArray, double colIndexNum, bool rangeLookup = true)
        {
            var i = 0;
            colIndexNum--;

            if (colIndexNum < 0 || colIndexNum > tableArray.GetLength(1) || lookUpValue < tableArray[0, 0])
            {
                return 0; //NULL
            }

            var lookupCol = 0;
            var values = new List<double>();
            for (i = 0; i < tableArray.GetLength(0); i++)
                values.Add(tableArray[i, lookupCol]);

            var index = values.IndexOf(lookUpValue);

            if (index > -1)
                return tableArray[index, (int)colIndexNum];

            if (rangeLookup)
            {
                var value = values[0];
                for (i = 0; i < values.Count; i++)
                {
                    value = values[i];
                    if (value > lookUpValue && i > 0)
                    {
                        value = values[i - 1];
                        break;
                    }
                }
                index = values.IndexOf(value);
                return tableArray[index, (int)colIndexNum];
            }

            return 0; //NULL
        }

        public double E182
        {
            get
            {
                //fINE
                return VLOOKUP(E175, GetLookupTable(), (B53 == 150 ? 4 : (B53 == 300 ? 5 : (B53 == 600 ? 6 : (B53 == 900 ? 7 : 8)))));
            }
        }
        public double H180
        {
            get
            {
                //FINE
                return VLOOKUP(H174, GetLookupTable(), (B53 == 150 ? 4 : (B53 == 300 ? 5 : (B53 == 600 ? 6 : (B53 == 900 ? 7 : 8)))));
            }
        }
        public double B456
        {
            get
            {
                //TODO
                return I108 * 0.7854 * Math.Pow((B184 / 12), 2);
            }
        }
        public double B473
        {
            get
            {
                //TODO
                return (B471 == BooleanResponse.N ? 0 : B462 * E113);
            }
        }
        public double B520
        {
            get
            {
                //TODO
                return (B514 == GeneralClassification.None ? 0 : (B518 == BooleanResponse.N ? 0 : B529 * E114));
            }
        }
        public double B569
        {
            get
            {
                //TODO
                return (B567 == BooleanResponse.N ? 0 : B462 * E113);
            }
        }
        public double B541
        {
            get
            {
                //TODO
                return (B514 == GeneralClassification.Mesh ? B529 * M131 : (B514 == GeneralClassification.Vane ? B529 * L143 : (B514 == GeneralClassification.Cyclone ? B529 * N155 : 0)));
            }
        }
        public double C541
        {
            get
            {
                //TODO
                return (C514 == GeneralClassification.Mesh ? C529 * M131 : (C514 == GeneralClassification.Vane ? C529 * L143 : (C514 == GeneralClassification.Cyclone ? C529 * N155 : 0)));
            }
        }
        public double H7 { get; set; }
        public double B56 { get; set; }
        public double B52
        {
            get
            {
                //TODO
                return B18 * 1.1;
            }
        }
        public double B54 { get; set; }
        public double B55 { get; set; }
        public Position B3 { get; set; }
        public double B877
        {
            get
            {
                //TODO
                return H9 + Math.Max(B872, B875);
            }
        }
        public double B492
        {
            get
            {
                //TODO
                return (A108 >= 4 ? 0.6 * H7 : 0.4 * H7);
            }
        }
        public double H8 { get; set; }
        public double B493
        {
            get
            {
                //TODO
                return 0.5 * H7;
            }
        }
        public double B39
        {
            get
            {
                //TODO
                return (B3 == Position.Horizontal ? (H7 < 6 ? 0.5 : 1) : F108 * H7);
            }
        }
        public double B40
        {
            get
            {
                //TODO
                return (B3 == Position.Horizontal ? (H7 < 6 ? 0.75 : 1) : 0);
            }
        }
        public double B41
        {
            get
            {
                //TODO
                return (B3 == Position.Horizontal ? 0 : G108 * B181 / 12);
            }
        }
        public double B42
        {
            get
            {
                //TODO
                return H8;
            }
        }
        public double B43
        {
            get
            {
                //TODO
                return (B3 == Position.Horizontal ? 0 : B543);
            }
        }
        public double B44
        {
            get
            {
                //TODO
                return (B3 == Position.Horizontal ? 0.25 : (C514 == GeneralClassification.None ? 0 : Math.Max(0.2 * H7, 1.5)));
            }
        }
        public double B45
        {
            get
            {
                //TODO
                return (B3 == Position.Horizontal ? 0 : C543);
            }
        }
        public double B46
        {
            get
            {
                //TODO
                return (B3 == Position.Horizontal ? 0 : 0.15 * H7);
            }
        }
        public double B181
        {
            get
            {
                //FINE
                return VLOOKUP(B180, GetLookupTable(2), 2);
            }
        }
        public double B53
        {
            get
            {
                //TODO
                return (B52 < 285 ? 150 : (B52 < 740 ? 300 : (B52 < 1480 ? 600 : (B52 < 2220 ? 900 : 1500))));
            }
        }

        #region Table Nozzle Weights
        public double K165 { get; set; }
        public double L165 { get; set; }
        public double M165 { get; set; }
        public double N165
        {
            get
            {
                return B52 * M165 / (2 * (20000 + 0.4 * B52));
            }
        }
        public double O165 { get; set; }
        public double P165 { get; set; }
        public double Q165 { get; set; }
        public double R165 { get; set; }
        public double S165 { get; set; }
        public double K166
        {
            get
            {
                return M165 - 2 * N165;
            }
        }
        public double L166 { get; set; }
        public double M166 { get; set; }
        public double N166
        {
            get
            {
                return B52 * M166 / (2 * (20000 + 0.4 * B52));
            }
        }
        public double O166 { get; set; }
        public double P166 { get; set; }
        public double Q166 { get; set; }
        public double R166 { get; set; }
        public double S166 { get; set; }
        public double K167
        {
            get
            {
                return M166 - 2 * N166;
            }
        }
        public double L167 { get; set; }
        public double M167 { get; set; }
        public double N167
        {
            get
            {
                return B52 * M167 / (2 * (20000 + 0.4 * B52));
            }
        }
        public double O167 { get; set; }
        public double P167 { get; set; }
        public double Q167 { get; set; }
        public double R167 { get; set; }
        public double S167 { get; set; }
        public double K168
        {
            get
            {
                return M167 - 2 * N167;
            }
        }
        public double L168 { get; set; }
        public double M168 { get; set; }
        public double N168
        {
            get
            {
                return B52 * M168 / (2 * (20000 + 0.4 * B52));
            }
        }
        public double O168 { get; set; }
        public double P168 { get; set; }
        public double Q168 { get; set; }
        public double R168 { get; set; }
        public double S168 { get; set; }
        public double K169
        {
            get
            {
                return M168 - 2 * N168;
            }
        }
        public double L169 { get; set; }
        public double M169 { get; set; }
        public double N169
        {
            get
            {
                return B52 * M169 / (2 * (20000 + 0.4 * B52));
            }
        }
        public double O169 { get; set; }
        public double P169 { get; set; }
        public double Q169 { get; set; }
        public double R169 { get; set; }
        public double S169 { get; set; }
        public double K170
        {
            get
            {
                return M169 - 2 * N169;
            }
        }
        public double L170 { get; set; }
        public double M170 { get; set; }
        public double N170
        {
            get
            {
                return B52 * M170 / (2 * (20000 + 0.4 * B52));
            }
        }
        public double O170 { get; set; }
        public double P170 { get; set; }
        public double Q170 { get; set; }
        public double R170 { get; set; }
        public double S170 { get; set; }
        public double K171
        {
            get
            {
                return M170 - 2 * N170;
            }
        }
        public double L171 { get; set; }
        public double M171 { get; set; }
        public double N171
        {
            get
            {
                return B52 * M171 / (2 * (20000 + 0.4 * B52));
            }
        }
        public double O171 { get; set; }
        public double P171 { get; set; }
        public double Q171 { get; set; }
        public double R171 { get; set; }
        public double S171 { get; set; }
        public double K172
        {
            get
            {
                return M171 - 2 * N171;
            }
        }
        public double L172 { get; set; }
        public double M172 { get; set; }
        public double N172
        {
            get
            {
                return B52 * M172 / (2 * (20000 + 0.4 * B52));
            }
        }
        public double O172 { get; set; }
        public double P172 { get; set; }
        public double Q172 { get; set; }
        public double R172 { get; set; }
        public double S172 { get; set; }
        public double K173
        {
            get
            {
                return M172 - 2 * N172;
            }
        }
        public double L173 { get; set; }
        public double M173 { get; set; }
        public double N173
        {
            get
            {
                return B52 * M173 / (2 * (20000 + 0.4 * B52));
            }
        }
        public double O173 { get; set; }
        public double P173 { get; set; }
        public double Q173 { get; set; }
        public double R173 { get; set; }
        public double S173 { get; set; }
        public double K174
        {
            get
            {
                return M173 - 2 * N173;
            }
        }
        public double L174 { get; set; }
        public double M174 { get; set; }
        public double N174
        {
            get
            {
                return B52 * M174 / (2 * (20000 + 0.4 * B52));
            }
        }
        public double O174 { get; set; }
        public double P174 { get; set; }
        public double Q174 { get; set; }
        public double R174 { get; set; }
        public double S174 { get; set; }
        public double K175
        {
            get
            {
                return M174 - 2 * N174;
            }
        }
        public double L175 { get; set; }
        public double M175 { get; set; }
        public double N175
        {
            get
            {
                return B52 * M175 / (2 * (20000 + 0.4 * B52));
            }
        }
        public double O175 { get; set; }
        public double P175 { get; set; }
        public double Q175 { get; set; }
        public double R175 { get; set; }
        public double S175 { get; set; }
        public double K176
        {
            get
            {
                return M175 - 2 * N175;
            }
        }
        public double L176 { get; set; }
        public double M176 { get; set; }
        public double N176
        {
            get
            {
                return B52 * M176 / (2 * (20000 + 0.4 * B52));
            }
        }
        public double O176 { get; set; }
        public double P176 { get; set; }
        public double Q176 { get; set; }
        public double R176 { get; set; }
        public double S176 { get; set; }
        public double K177
        {
            get
            {
                return M176 - 2 * N176;
            }
        }
        public double L177 { get; set; }
        public double M177 { get; set; }
        public double N177
        {
            get
            {
                return B52 * M177 / (2 * (20000 + 0.4 * B52));
            }
        }
        public double O177 { get; set; }
        public double P177 { get; set; }
        public double Q177 { get; set; }
        public double R177 { get; set; }
        public double S177 { get; set; }
        public double K178
        {
            get
            {
                return M177 - 2 * N177;
            }
        }
        public double L178 { get; set; }
        public double M178 { get; set; }
        public double N178
        {
            get
            {
                return B52 * M178 / (2 * (20000 + 0.4 * B52));
            }
        }
        public double O178 { get; set; }
        public double P178 { get; set; }
        public double Q178 { get; set; }
        public double R178 { get; set; }
        public double S178 { get; set; }
        public double K179
        {
            get
            {
                return M178 - 2 * N178;
            }
        }
        public double L179 { get; set; }
        public double M179 { get; set; }
        public double N179
        {
            get
            {
                return B52 * M179 / (2 * (20000 + 0.4 * B52));
            }
        }
        public double O179 { get; set; }
        public double P179 { get; set; }
        public double Q179 { get; set; }
        public double R179 { get; set; }
        public double S179 { get; set; }
        public double K180
        {
            get
            {
                return M179 - 2 * N179;
            }
        }
        public double L180 { get; set; }
        public double M180 { get; set; }
        public double N180
        {
            get
            {
                return B52 * M180 / (2 * (20000 + 0.4 * B52));
            }
        }
        public double O180 { get; set; }
        public double P180 { get; set; }
        public double Q180 { get; set; }
        public double R180 { get; set; }
        public double S180 { get; set; }
        #endregion

        public double E175
        {
            get
            {
                //fINE
                return VLOOKUP(E174, GetLookupTable(2), 2);
            }
        }
        public double H174
        {
            get
            {
                //FINE
                return VLOOKUP(H173, GetLookupTable(2), 2);
            }
        }
        public double I108
        {
            get
            {
                return VLOOKUP(A108, GetLookupTable(3), I97);
            }
        }
        public double B184
        {
            get
            {
                return B182 - 2 * B183;
            }
        }
        public BooleanResponse B471
        {
            get
            {
                return B113;
            }
        }
        public double B462
        {
            get
            {
                return (B3 == Position.Vertical ? 0.7854 * Math.Pow(H7, 2) : 0.7854 * Math.Pow(H7, 2) - B488);
            }
        }
        public double E113
        {
            get
            {
                return 0.25 * 144 / 1728 * (1 - 0.2) * 489;
            }
        }
        public GeneralClassification B514 { get; set; }
        public BooleanResponse B518
        {
            get
            {
                return (B514 == GeneralClassification.None ? BooleanResponse.N_A : B114);
            }
        }
        public double B529
        {
            get
            {
                return (B514 == GeneralClassification.None
                    ? Double.NaN //"N/A"
                    : (C514 == GeneralClassification.None
                        ? ((B3 == Position.Vertical && B517 == Position.Vertical)
                            ? Math.Min(0.7854 * Math.Pow(B461, 2), B460 * B523 / B526)
                            : B460 * B523 / B526) : 0));
            }
        }
        public double E114
        {
            get
            {
                return 0.25 * 144 / 1728 * (1 - 0.2) * 489;
            }
        }
        public BooleanResponse B567
        {
            get
            {
                return B115;
            }
        }
        public double M131
        {
            get
            {
                return VLOOKUP(A131, GetLookupTable(4), M119, false);
            }
        }
        public double L143
        {
            get
            {
                return VLOOKUP(A143, GetLookupTable(5), L119, false);
            }
        }
        public double N155
        {
            get
            {
                return VLOOKUP(A155, GetLookupTable(6), N119, false);
            }
        }
        public GeneralClassification C514 { get; set; }
        public double C529
        {
            get
            {
                return (C514 == GeneralClassification.None ? Double.NaN : B460 * B523 / C526); //N/A 0
            }
        }
        public double B18 { get; set; }
        public double H9 { get; set; }
        public double B872
        {
            get
            {
                return (B3 == Position.Vertical ? B860 + B868 / (0.7854 * Math.Pow(H7, 2)) + B865 : B871 * H7);
            }
        }
        public double B875
        {
            get
            {
                return B860 + B49 + B865;
            }
        }
        public double F108
        {
            get
            {
                return VLOOKUP(A108, GetLookupTable(3), F97);
            }
        }
        public double G108
        {
            get
            {
                return VLOOKUP(A108, GetLookupTable(3), G97);
            }
        }
        public double B543
        {
            get
            {
                return (B514 == GeneralClassification.None ? 0 : (B517 == Position.Vertical ? 1.2 * B542 : Math.Pow((1.5 * B529), 0.5) + 1));
            }
        }
        public double C543
        {
            get
            {
                return (C514 == GeneralClassification.None ? 0 : (C517 == Position.Vertical ? 1.2 * C542 : 0));
            }
        }
        public double B180
        {
            get
            {
                return (Math.Pow((B179 / 0.7854), 0.5)) * 12;
            }
        }
        public double A108 { get; set; }
        public double E174
        {
            get
            {
                return (Math.Pow((E173 / 0.7854), 0.5)) * 12;
            }
        }
        public double H173
        {
            get
            {
                return Math.Max((Math.Pow((H172 / 0.7854), 0.5)) * 12, 2);
            }
        }
        public double I97
        {
            get
            {
                return H97 + 1;
            }
        }

        #region Table Inlet Device
        public double A101 { get; set; }
        public double B101 { get; set; }
        public double C101 { get; set; }
        public double D101
        {
            get
            {
                return C101 * 1.488;
            }
        }
        public double E101 { get; set; }
        public double F101 { get; set; }
        public double G101 { get; set; }
        public double H101 { get; set; }
        public double I101 { get; set; }
        public double A102 { get; set; }
        public double B102 { get; set; }
        public double C102 { get; set; }
        public double D102
        {
            get
            {
                return C102 * 1.488;
            }
        }
        public double E102 { get; set; }
        public double F102 { get; set; }
        public double G102 { get; set; }
        public double H102 { get; set; }
        public double I102 { get; set; }
        public double A103 { get; set; }
        public double B103 { get; set; }
        public double C103 { get; set; }
        public double D103
        {
            get
            {
                return C103 * 1.488;
            }
        }
        public double E103 { get; set; }
        public double F103 { get; set; }
        public double G103 { get; set; }
        public double H103 { get; set; }
        public double I103 { get; set; }
        public double A104 { get; set; }
        public double B104 { get; set; }
        public double C104 { get; set; }
        public double D104
        {
            get
            {
                return C104 * 1.488;
            }
        }
        public double E104 { get; set; }
        public double F104 { get; set; }
        public double G104 { get; set; }
        public double H104 { get; set; }
        public double I104 { get; set; }
        public double A105 { get; set; }
        public double B105 { get; set; }
        public double C105 { get; set; }
        public double D105
        {
            get
            {
                return C105 * 1.488;
            }
        }
        public double E105 { get; set; }
        public double F105 { get; set; }
        public double G105 { get; set; }
        public double H105 { get; set; }
        public double I105 { get; set; }
        #endregion

        public double B182
        {
            get
            {
                //fINE
                return VLOOKUP(B180, GetLookupTable(2), 3);
            }
        }
        public double B183
        {
            get
            {
                return B52 * B182 / (2 * (20000 + 0.4 * B52));
            }
        }
        public BooleanResponse B113 { get; set; }
        private double? _b488;
        public double B488
        {
            get
            {
                _b488 = _b488 ?? (B483 * (1 / 3.1416 * Math.Acos(1 - 2 * B878) - 2 / 3.1416 * (1 - 2 * B878) * Math.Pow((B878 - Math.Pow(B878, 2)), 0.5)));
                return _b488.Value;
            }
        }
        public BooleanResponse B114 { get; set; }
        public double B461
        {
            get
            {
                return H7;
            }
        }
        public Position B517
        {
            get
            {
                return (B514 == GeneralClassification.Mesh ? C131 : (B514 == GeneralClassification.Vane ? C143 : (B514 == GeneralClassification.Cyclone ? C155 : Position.N_A)));
            }
        }
        public double B526
        {
            get
            {
                return (B514 == GeneralClassification.None
                    ? Double.NaN //"N/A"
                    : B525 * Math.Pow(((E33 - E20) / E20), 0.5));
            }
        }
        public double B523
        {
            get
            {
                return (B514 == GeneralClassification.None
                ? Double.NaN //"N/A"
                : Math.Max(((B521 - 1) * (1 - 0.2 * B522) + 1), 1));
            }
        }
        public double B460
        {
            get
            {
                return E21;
            }
        }
        public BooleanResponse B115 { get; set; }
        public double M119
        {
            get
            {
                return L119 + 1;
            }
        }
        /// <summary>
        /// Mesh Pads Selector: None 1, M1 =1 M2 = 2, M3 = 3, M4 = 4
        /// </summary>
        public double A131 { get; set; }

        #region Table Mesh Pads
        public double A123 { get; set; }
        public double A124 { get; set; }
        public double A125 { get; set; }
        public double A126 { get; set; }
        public double A127 { get; set; }
        public double B123 { get; set; }
        public double B124 { get; set; }
        public double B125 { get; set; }
        public double B126 { get; set; }
        public double B127 { get; set; }
        public double C123 { get; set; }
        public double C124 { get; set; }
        public double C125 { get; set; }
        public double C126 { get; set; }
        public double C127 { get; set; }
        public double D123 { get; set; }
        public double D124 { get; set; }
        public double D125 { get; set; }
        public double D126 { get; set; }
        public double D127 { get; set; }
        public double E123 { get; set; }
        public double E124 { get; set; }
        public double E125 { get; set; }
        public double E126 { get; set; }
        public double E127 { get; set; }
        public double F123 { get; set; }
        public double F124 { get; set; }
        public double F125 { get; set; }
        public double F126 { get; set; }
        public double F127 { get; set; }
        public double G123 { get; set; }
        public double G124 { get; set; }
        public double G125 { get; set; }
        public double G126 { get; set; }
        public double G127 { get; set; }
        public double H123 { get; set; }
        public double H124 { get; set; }
        public double H125 { get; set; }
        public double H126 { get; set; }
        public double H127 { get; set; }
        public double I123 { get; set; }
        public double I124
        {
            get
            {
                return (C124 == (double)Position.Vertical ? 0.38 : 0.67 * 0.38);
            }
        }
        public double I125
        {
            get
            {
                return (C125 == (double)Position.Vertical ? 0.35 : 0.67 * 0.35);
            }
        }
        public double I126
        {
            get
            {
                return (C126 == (double)Position.Vertical ? 0.35 : 0.67 * 0.35);
            }
        }
        public double I127
        {
            get
            {
                return (C125 == (double)Position.Vertical ? 0.25 : 0.67 * 0.25);
            }
        }
        public double J123 { get; set; }
        public double J124 { get; set; }
        public double J125 { get; set; }
        public double J126 { get; set; }
        public double J127 { get; set; }
        public double K123 { get; set; }
        public double K124 { get; set; }
        public double K125 { get; set; }
        public double K126 { get; set; }
        public double K127 { get; set; }
        public double L123 { get; set; }
        public double L124
        {
            get
            {
                return 2 * 0.8 * D124 * H124 / ((F124 / 12) * 493);
            }
        }
        public double L125
        {
            get
            {
                return 2 * 0.8 * D125 * H125 / ((F125 / 12) * 493);
            }
        }
        public double L126
        {
            get
            {
                return 2 * 0.8 * D126 * H126 / ((F126 / 12) * 493);
            }
        }
        public double L127
        {
            get
            {
                return 2 * 0.8 * D127 * H127 / ((F127 / 12) * 493);
            }
        }
        public double M123 { get; set; }
        public double M124
        {
            get
            {
                return 1.1 * D124;
            }
        }
        public double M125
        {
            get
            {
                return 1.1 * D125;
            }
        }
        public double M126
        {
            get
            {
                return 1.1 * D126;
            }
        }
        public double M127
        {
            get
            {
                return 1.1 * D127;
            }
        }
        public double N123 { get; set; }
        public double N124 { get; set; }
        public double N125 { get; set; }
        public double N126 { get; set; }
        public double N127 { get; set; }
        public double O123 { get; set; }
        public double O124
        {
            get
            {
                return (H7 < 6 ? 1.5 : 2);
            }
        }
        public double O125
        {
            get
            {
                return (H7 < 6 ? 1.5 : 2);
            }
        }
        public double O126
        {
            get
            {
                return (H7 < 6 ? 1.5 : 2);
            }
        }
        public double O127
        {
            get
            {
                return (H7 < 6 ? 1.5 : 2);
            }
        }
        #endregion

        /// <summary>
        /// Vane Packs Selector: None = 0, V1 = 1, V2 = 2, V3 = 3
        /// </summary>
        public double A143 { get; set; }
        public double L119
        {
            get
            {
                return K119 + 1;
            }
        }

        #region Table Vane Packs
        public double A136 { get; set; }
        public double A137 { get; set; }
        public double A138 { get; set; }
        public double A139 { get; set; }
        public double B136 { get; set; }
        public double B137 { get; set; }
        public double B138 { get; set; }
        public double B139 { get; set; }
        public double C136 { get; set; }
        public double C137 { get; set; }
        public double C138 { get; set; }
        public double C139 { get; set; }
        public double D136 { get; set; }
        public double D137 { get; set; }
        public double D138 { get; set; }
        public double D139 { get; set; }
        public double E136 { get; set; }
        public double E137 { get; set; }
        public double E138 { get; set; }
        public double E139 { get; set; }
        public double F136 { get; set; }
        public double F137 { get; set; }
        public double F138 { get; set; }
        public double F139 { get; set; }
        public double G136 { get; set; }
        public double G137 { get; set; }
        public double G138 { get; set; }
        public double G139 { get; set; }
        public double H136 { get; set; }
        public double H137
        {
            get
            {
                return (C137 == (double)Position.Vertical ? 0.5 : 0.65);
            }
        }
        public double H138
        {
            get
            {
                return (C138 == (double)Position.Vertical ? 0.8 : 0.9);
            }
        }
        public double H139
        {
            get
            {
                return (C139 == (double)Position.Vertical ? 1 : 1.15);
            }
        }
        public double I136 { get; set; }
        public double I137 { get; set; }
        public double I138 { get; set; }
        public double I139 { get; set; }
        public double J136 { get; set; }
        public double J137 { get; set; }
        public double J138 { get; set; }
        public double J139 { get; set; }
        public double K136 { get; set; }
        public double K137 { get; set; }
        public double K138 { get; set; }
        public double K139 { get; set; }
        public double L136 { get; set; }
        public double L137 { get; set; }
        public double L138 { get; set; }
        public double L139 { get; set; }
        public double M136 { get; set; }
        public double M137 { get; set; }
        public double M138 { get; set; }
        public double M139 { get; set; }
        public double N136 { get; set; }
        public double N137 { get; set; }
        public double N138 { get; set; }
        public double N139 { get; set; }
        public double O136 { get; set; }
        public double O137
        {
            get
            {
                return (H7 < 6 ? 2 : 2.5);
            }
        }
        public double O138
        {
            get
            {
                return (H7 < 6 ? 2 : 2.5);
            }
        }
        public double O139
        {
            get
            {
                return (H7 < 6 ? 2 : 2.5);
            }
        }
        #endregion

        /// <summary>
        /// Demisting Cyclone Selector: None = 0, C1 = 1, C2 = 2
        /// </summary>
        public double A155 { get; set; }
        public double N119
        {
            get
            {
                return M119 + 1;
            }
        }

        #region Table Demisting Cyclones
        public double A149 { get; set; }
        public double A150 { get; set; }
        public double A151 { get; set; }
        public double B149 { get; set; }
        public double B150 { get; set; }
        public double B151 { get; set; }
        public double C149 { get; set; }
        public double C150 { get; set; }
        public double C151 { get; set; }
        public double D149 { get; set; }
        public double D150 { get; set; }
        public double D151 { get; set; }
        public double E149 { get; set; }
        public double E150 { get; set; }
        public double E151 { get; set; }
        public double F149 { get; set; }
        public double F150
        {
            get
            {
                return 144 / Math.Pow((D150 * E150), 2);
            }
        }
        public double F151
        {
            get
            {
                return 144 / Math.Pow((D151 * E151), 2);
            }
        }
        public double G149 { get; set; }
        public double G150
        {
            get
            {
                return F150 * 0.7854 * Math.Pow((D150 / 12), 2);
            }
        }
        public double G151
        {
            get
            {
                return F151 * 0.7854 * Math.Pow((D151 / 12), 2);
            }
        }
        public double H149 { get; set; }
        public double H150 { get; set; }
        public double H151 { get; set; }
        public double I149 { get; set; }
        public double I150 { get; set; }
        public double I151 { get; set; }
        public double J149 { get; set; }
        public double J150 { get; set; }
        public double J151 { get; set; }
        public double K149 { get; set; }
        public double K150 { get; set; }
        public double K151 { get; set; }
        public double L149 { get; set; }
        public double L150 { get; set; }
        public double L151 { get; set; }
        public double M149 { get; set; }
        public double M150 { get; set; }
        public double M151 { get; set; }
        public double N149 { get; set; }
        public double N150 { get; set; }
        public double N151 { get; set; }
        public double O149 { get; set; }
        public double O150 { get; set; }
        public double O151 { get; set; }
        public double P149
        {
            get
            {
                return (H7 < 6 ? 2 : 2.5);
            }
        }
        public double P150
        {
            get
            {
                return (H7 < 6 ? 2 : 2.5);
            }
        }
        public double P151
        {
            get
            {
                return (H7 < 6 ? 2 : 2.5);
            }
        }
        #endregion

        public double C526
        {
            get
            {
                return (C514 == GeneralClassification.None
                 ? Double.NaN //"N/A"
                 : C525 * Math.Pow(((E33 - E20) / E20), 0.5));
            }
        }
        public double B860
        {
            get
            {
                return H9 + Math.Max(B848, Math.Max(B855, B858));
            }
        }
        public double B868
        {
            get
            {
                return E32 * 60 * B50;
            }
        }
        public double B865
        {
            get
            {
                return (B15 == BooleanResponse.N ? 0 : 1);
            }
        }
        public double B871
        {
            get
            {
                return 5.6548 * Math.Pow(B870, 5) - 14.137 * Math.Pow(B870, 4) + 13.385 * Math.Pow(B870, 3) - 5.9405 * Math.Pow(B870, 2) + 2.0325 * B870 + 0.002574;
            }
        }
        public double B49
        {
            get
            {
                return (H7 < 6 ? 0.5 : 0.75);
            }
        }
        public double F97
        {
            get
            {
                return E97 + 1;
            }
        }
        public double G97
        {
            get
            {
                return F97 + 1;
            }
        }
        public double B542
        {
            get
            {
                return (B514 == GeneralClassification.None ? 0 : (B514 == GeneralClassification.Mesh ? H131 : (B514 == GeneralClassification.Vane ? G143 : (B514 == GeneralClassification.Cyclone ? (H155 / 12)
                    : Double.NaN // "N/A"
                    ))));
            }
        }
        public double C542
        {
            get
            {
                return (C514 == GeneralClassification.None ? 0 : (C514 == GeneralClassification.Mesh ? H131 : (C514 == GeneralClassification.Vane ? G143 : (C514 == GeneralClassification.Cyclone ? H155 :
                    Double.NaN //"N/A"
                    ))));
            }
        }
        public Position C517
        {
            get
            {
                return (C514 == GeneralClassification.Mesh ? C131 : (C514 == GeneralClassification.Vane ? C143 : (C514 == GeneralClassification.Cyclone ? C155
                    : unchecked((Position)Double.NaN)//"N/A"
                    )));
            }
        }
        public double B179
        {
            get
            {
                return B168 / B178;
            }
        }
        public double E173
        {
            get
            {
                return E169 / E172;
            }
        }
        public double H172
        {
            get
            {
                return H169 / H171;
            }
        }
        public double H97
        {
            get
            {
                return G97 + 1;
            }
        }
        private double? _b483;
        public double B483
        {
            get
            {
                _b483 = _b483 ?? (0.7854 * Math.Pow(H7, 2));
                return _b483.Value;
            }
        }
        public double B878
        {
            get
            {
                return B877 / H7;
            }
        }
        public Position C131
        {
            get
            {
                return (Position)VLOOKUP(A131, GetLookupTable(4), C119, false);
            }
        }
        public Position C143
        {
            get
            {
                return (Position)VLOOKUP(A143, GetLookupTable(5), C119, false);
            }
        }
        public Position C155
        {
            get
            {
                return (Position)VLOOKUP(A155, GetLookupTable(6), C119, false);
            }
        }
        public double E33
        {
            get
            {
                return (350 * (141.5 / (131.5 + B21)) + 0.0764 * B20 * E29) / (5.615 * E30);
            }
        }
        public double B525
        {
            get
            {
                return (B514 == GeneralClassification.None ?
                    Double.NaN //"N/A"
                    : B524 * ((B18 < 350 ? 1 - 0.17 / 300 * B18 : 0.84 - 0.12 / 1650 * B18)));
            }
        }
        public double E20
        {
            get
            {
                return (B18 + B29) * E10 / (E19 * 10.73 * (B16 + 460));
            }
        }
        public double B521
        {
            get
            {
                return (B518 == BooleanResponse.N ? B474 : (B474 - 1) * (1 - C114) + 1);
            }
        }
        public double B522
        {
            get
            {
                return (B514 == GeneralClassification.None ? 0 :
                    (B514 == GeneralClassification.Mesh ? 0.193 * (0.05 * 1 + 1) * L131 * E20 * Math.Pow(B526, 2) / (2 * 32.17) :
                    (B514 == GeneralClassification.Vane ? 0.193 * (0.05 * 1 + 1) * K143 * E20 * Math.Pow(B526, 2) / (2 * 32.17) :
                    (B514 == GeneralClassification.Cyclone ? 0.193 * (0.05 * 1 + 1) * L155 * E20 * Math.Pow(B526, 2) / (2 * 32.17) :
                    Double.NaN //"N/A"
                    ))));
            }
        }
        public double E21
        {
            get
            {
                return (B13 * 1000000 - B12 * E29) / 86400 / 379.4 * E10 / E20;
            }
        }
        public double K119
        {
            get
            {
                return J119 + 1;
            }
        }

        public double C525
        {
            get
            {
                return (C514 == GeneralClassification.None ?
                    Double.NaN //"N/A"
                    : C524 * ((B18 < 350 ? 1 - 0.17 / 300 * B18 : 0.84 - 0.12 / 1650 * B18)));
            }
        }
        public double B848
        {
            get
            {
                return (B3 == Position.Vertical ? B831 + (B842 + B838) / Math.Pow((0.7854 * H7), 2) : B847 * H7);
            }
        }
        public double B855
        {
            get
            {
                return (B3 == Position.Vertical ? B831 + B851 / (0.7854 * Math.Pow(H7, 2)) : B854 * H7);
            }
        }
        public double B858
        {
            get
            {
                return B831 + B47;
            }
        }
        public double E32
        {
            get
            {
                return B12 * E30 * 5.615 / 86400;
            }
        }
        public double B50 { get; set; }
        public BooleanResponse B15 { get; set; }
        public double B870
        {
            get
            {
                return B869 / (0.7854 * Math.Pow(H7, 2));
            }
        }
        public double E97
        {
            get
            {
                return D97 + 1;
            }
        }
        public double H131
        {
            get
            {
                return VLOOKUP(A131, GetLookupTable(4), H119, false);
            }
        }
        public double G143
        {
            get
            {
                return VLOOKUP(A143, GetLookupTable(5), G119, false);
            }
        }
        public double H155
        {
            get
            {
                return VLOOKUP(A155, GetLookupTable(6), H119, false);
            }
        }
        public double B168
        {
            get
            {
                return E21 + E32;
            }
        }
        public double B178
        {
            get
            {
                return Math.Pow((B174 / B169), 0.5);
            }
        }
        public double E169
        {
            get
            {
                return E21;
            }
        }
        public double E172
        {
            get
            {
                return Math.Pow((E171 / E170), 0.5);
            }
        }
        public double H169
        {
            get
            {
                return E32;
            }
        }
        public double H171 { get; set; }
        public double C119
        {
            get
            {
                return B119 + 1;
            }
        }
        public double B21 { get; set; }
        public double B20 { get; set; }
        public double E29
        {
            get
            {
                return (B21 <= 30 ? 0.0362 * B20 * (Math.Pow((B18 + B29), 1.0937)) * Math.Exp(25.724 * B21 / (B16 + 460)) : 1.15 * 0.0178 * B20 * (Math.Pow((B18 + B29), 1.187)) * Math.Exp(23.931 * B21 / (B16 + 460)));
            }
        }
        public double E30
        {
            get
            {
                return (B21 <= 30 ? 1 + 0.0004677 * E29 + 0.00001751 * (B16 - 60) * (B21 / B20) - 0.00000001811 * E29 * (B16 - 60) * (B21 / B20) : 1 + 0.000467 * E29 + 0.000011 * (B16 - 60) * (B21 / B20) + 0.000000001337 * E29 * (B16 - 60) * (B21 / B20));
            }
        }
        public double B524
        {
            get
            {
                return (B514 == GeneralClassification.Mesh ? I131 : (B514 == GeneralClassification.Vane ? H143 : (B514 == GeneralClassification.Cyclone ? J155 : Double.NaN//"N/A"
                    )));
            }
        }
        public double B29 { get; set; }
        public double E10
        {
            get
            {
                return B20 * 29;
            }
        }
        public double E19
        {
            get
            {
                return E15 + (1 - E15) * (Math.Exp(-E16)) + E17 * Math.Pow(E14, E18);
            }
        }
        public double B16 { get; set; }
        private double? _b474;
        public double B474
        {
            get
            {
                _b474 = _b474 ?? ((B471 == BooleanResponse.N ? B470 : (B470 - 1) * (1 - C113) + 1));
                return _b474.Value;
            }
        }
        public double C114 { get; set; }
        public double L131
        {
            get
            {
                return VLOOKUP(A131, GetLookupTable(4), L119, false);
            }
        }
        public double K143
        {
            get
            {
                return VLOOKUP(A143, GetLookupTable(5), K119, false);
            }
        }
        public double L155
        {
            get
            {
                return VLOOKUP(A155, GetLookupTable(6), L119, false);
            }
        }
        public double B13
        {
            get
            {
                return B8 * B11;
            }
        }
        public double B12
        {
            get
            {
                return B7 * B11;
            }
        }
        public double J119
        {
            get
            {
                return I119 + 1;
            }
        }

        public double C524
        {
            get
            {
                return (C514 == GeneralClassification.Mesh ? I131 : (C514 == GeneralClassification.Vane ? H143 : (C514 == GeneralClassification.Cyclone ? J155 : Double.NaN//"N/A"
                    )));
            }
        }
        public double B831
        {
            get
            {
                return H9 + Math.Max(B826, B829);
            }
        }
        public double B842
        {
            get
            {
                return B841 * 5.615;
            }
        }
        public double B838
        {
            get
            {
                return B837 * 5.615;
            }
        }
        public double B847
        {
            get
            {
                return 5.6548 * Math.Pow(B846, 5) - 14.137 * Math.Pow(B846, 4) + 13.385 * Math.Pow(B846, 3) - 5.9405 * Math.Pow(B846, 2) + 2.0325 * B846 + 0.002574;
            }
        }
        public double B851
        {
            get
            {
                return E32 * (B48 * 60);
            }
        }
        public double B854
        {
            get
            {
                return 5.6548 * Math.Pow(B853, 5) - 14.137 * Math.Pow(B853, 4) + 13.385 * Math.Pow(B853, 3) - 5.9405 * Math.Pow(B853, 2) + 2.0325 * B853 + 0.002574;
            }
        }
        public double B47
        {
            get
            {
                return (H7 < 6 ? 1.17 : 1.5);
            }
        }
        public double B869
        {
            get
            {
                return B487 + B868 / (B492 + H8 + B493);
            }
        }
        public double D97
        {
            get
            {
                return C97 + 1;
            }
        }
        public double H119
        {
            get
            {
                return G119 + 1;
            }
        }
        public double G119
        {
            get
            {
                return F119 + 1;
            }
        }
        public double B174
        {
            get
            {
                return B173 * B172;
            }
        }
        public double B169
        {
            get
            {
                return (E21 * E20 + E32 * E33) / B168;
            }
        }
        public double E171 { get; set; }
        public double E170
        {
            get
            {
                return E20;
            }
        }
        public double B119
        {
            get
            {
                return A119 + 1;
            }
        }
        public double I131
        {
            get
            {
                return VLOOKUP(A131, GetLookupTable(4), I119, false);
            }
        }
        public double H143
        {
            get
            {
                return VLOOKUP(A143, GetLookupTable(5), H119, false);
            }
        }
        public double J155
        {
            get
            {
                return VLOOKUP(A155, GetLookupTable(6), J119, false);
            }
        }
        public double E15
        {
            get
            {
                return 1.39 * Math.Pow((E13 - 0.92), 0.5) - 0.36 * E13 - 0.101;
            }
        }
        public double E16
        {
            get
            {
                return (0.62 - 0.23 * E13) * E14 + ((0.066 / (E13 - 0.86)) - 0.037) * Math.Pow(E14, 2) + (0.32 * Math.Pow(E14, 6)) / Math.Exp(20.723 * (E13 - 1));
            }
        }
        public double E17
        {
            get
            {
                return 0.132 - 0.32 * Math.Log10(E13);
            }
        }
        public double E14
        {
            get
            {
                return (B18 + B29) / E12;
            }
        }
        public double E18
        {
            get
            {
                return Math.Exp(0.715 - 1.128 * E13 + 0.42 * Math.Pow(E13, 2));
            }
        }
        private double? _b470;
        public double B470
        {
            get
            {
                _b470 = _b470 ?? (Math.Max(1, (A108 == 1
                    ? (3.011 - 0.2136 * B469) / (1 + 0.1541 * B469 - 0.01749 * Math.Pow(B469, 2))
                    : (A108 == 2
                    ? (2.002 - 0.02044 * B469) / (1 + 0.14936 * B469 - 0.007879 * Math.Pow(B469, 2))
                    : (A108 == 3
                    ? (1.6002 + 0.05315 * B469) / (1 + 0.15228 * B469 - 0.0045517 * Math.Pow(B469, 2))
                    : (A108 == 4
                    ? (1.3009 + 0.18943 * B469) / (1 + 0.22544 * B469 - 0.0009816 * Math.Pow(B469, 2))
                    : (1.4501 + 0.094073 * B469) / (1 + 0.16319 * B469 - 0.0029191 * Math.Pow(B469, 2))))))));
                return _b470.Value;
            }
        }
        public double C113 { get; set; }
        public double B8 { get; set; }
        public double B11 { get; set; }
        public double B7 { get; set; }
        public double I119
        {
            get
            {
                return H119 + 1;
            }
        }

        public double B826
        {
            get
            {
                return (B3 == Position.Vertical ? B816 + B822 / (0.7854 * Math.Pow(H7, 2)) : B825 * H7);
            }
        }
        public double B829
        {
            get
            {
                return B816 + B49;
            }
        }
        public double B841
        {
            get
            {
                return B837;
            }
        }
        public double B837
        {
            get
            {
                return B14 * B190 * 0.7854 * Math.Pow((B184 / 12), 2) / 5.615;
            }
        }
        public double B846
        {
            get
            {
                return B845 / (0.7854 * Math.Pow(H7, 2));
            }
        }
        public double B48 { get; set; }
        public double B853
        {
            get
            {
                return B852 / (0.7854 * Math.Pow(H7, 2));
            }
        }
        public double B487
        {
            get
            {
                return B483 * (1 / 3.1416 * Math.Acos(1 - 2 * B861) - 2 / 3.1416 * (1 - 2 * B861) * Math.Pow((B861 - Math.Pow(B861, 2)), 0.5));
            }
        }
        public double C97
        {
            get
            {
                return B97 + 1;
            }
        }
        public double F119
        {
            get
            {
                return E119 + 1;
            }
        }
        public double B173 { get; set; }
        public double B172
        {
            get
            {
                return C108;
            }
        }
        public double A119 { get; set; }
        public double E13
        {
            get
            {
                return (B16 + 460) / E11;
            }
        }
        public double E12
        {
            get
            {
                return 690 - 35 * B20;
            }
        }
        private double? _b469;
        public double B469
        {
            get
            {
                _b469 = _b469 ?? ((B3 == Position.Vertical ? H8 / H7 : H8 / B468));
                return _b469.Value;
            }
        }

        public double B816
        {
            get
            {
                return B51;
            }
        }
        public double B822
        {
            get
            {
                return E32 * 60 * B50;
            }
        }
        public double B825
        {
            get
            {
                return 5.6548 * Math.Pow(B824, 5) - 14.137 * Math.Pow(B824, 4) + 13.385 * Math.Pow(B824, 3) - 5.9405 * Math.Pow(B824, 2) + 2.0325 * B824 + 0.002574;
            }
        }
        public double B14 { get; set; }
        public double B190
        {
            get
            {
                return B188 + B189;
            }
        }
        public double B845
        {
            get
            {
                return B485 + B844 / (B492 + H8 + B493);
            }
        }
        public double B852
        {
            get
            {
                return B485 + B851 / (B492 + H8 + B493);
            }
        }
        public double B861
        {
            get
            {
                return B860 / H7;
            }
        }
        public double B97
        {
            get
            {
                return A97 + 1;
            }
        }
        public double E119
        {
            get
            {
                return D119 + 1;
            }
        }
        public double C108
        {
            get
            {
                return VLOOKUP(A108, GetLookupTable(3), C97);
            }
        }
        public double E11
        {
            get
            {
                return 158 + 330 * B20;
            }
        }
        private double? _b468;
        public double B468
        {
            get
            {
                _b468 = _b468 ?? (Math.Pow(((B483 - B488) / 0.7854), 0.5));
                return _b468.Value;
            }
        }

        public double B51
        {
            get
            {
                return (H7 < 6 ? 0.5 : 1);
            }
        }
        public double B824
        {
            get
            {
                return B823 / (0.7854 * Math.Pow(H7, 2));
            }
        }
        public double B188
        {
            get
            {
                return E21 / (0.7854 * Math.Pow((B184 / 12), 2));
            }
        }
        public double B189
        {
            get
            {
                return E32 / (0.7854 * Math.Pow((B184 / 12), 2));
            }
        }
        public double B485
        {
            get
            {
                return B483 * (1 / 3.1416 * Math.Acos(1 - 2 * B832) - 2 / 3.1416 * (1 - 2 * B832) * Math.Pow((B832 - Math.Pow(B832, 2)), 0.5));
            }
        }
        public double B844
        {
            get
            {
                return B838 + B842;
            }
        }
        public double A97 { get; set; }
        public double D119
        {
            get
            {
                return C119 + 1;
            }
        }

        public double B823
        {
            get
            {
                return B819 + B822 / (B492 + H8 + B493);
            }
        }
        public double B832
        {
            get
            {
                return B831 / H7;
            }
        }
        public double B819
        {
            get
            {
                return 0.7854 * Math.Pow(H7, 2) * B818;
            }
        }
        public double B818
        {
            get
            {
                return 1 / 3.1416 * Math.Acos(1 - 2 * B817) - 2 / 3.1416 * (1 - 2 * B817) * Math.Pow((B817 - Math.Pow(B817, 2)), 0.5);
            }
        }
        public double B817
        {
            get
            {
                return B816 / H7;
            }
        }

        #region Constraint Variales
        public double I72
        {
            get
            {
                return H60 - H61;
            }
        }
        public double I73
        {
            get
            {
                return H61 - H63;
            }
        }
        public double I74
        {
            get
            {
                return H63 - H64;
            }
        }
        public double K72
        {
            get
            {
                return J72 / 60;
            }
        }
        public double K73
        {
            get
            {
                return J73 / 60;
            }
        }
        public double K74
        {
            get
            {
                return J74 / 60;
            }
        }
        public double H28
        {
            get
            {
                return H15 - B36;
            }
        }
        public double H29
        {
            get
            {
                return H17 - B35;
            }
        }
        public double H30
        {
            get
            {
                return (B3 == Position.Vertical ? H8 - H108 * H7 : 99);
            }
        }
        public double H31
        {
            get
            {
                return H18 - B37;
            }
        }
        public double H32
        {
            get
            {
                return H18 - B38;
            }
        }
        public double H33
        {
            get
            {
                return C68 - B68;
            }
        }
        public double H34
        {
            get
            {
                return C81 - B81;
            }
        }
        public double H35
        {
            get
            {
                return (B3 == Position.Vertical ? H7 - B528 : 99);
            }
        }
        public double H37
        {
            get
            {
                return (B3 == Position.Horizontal ? B506 - B502 : -99);
            }
        }
        public double H38
        {
            get
            {
                return C70 - B70;
            }
        }
        public double H39
        {
            get
            {
                return C69 - B69;
            }
        }
        public double H42
        {
            get
            {
                return (B3 == Position.Horizontal ? I60 - B550 : -99);
            }
        }
        public double H44
        {
            get
            {
                return (B3 == Position.Horizontal ? (B549 - B877) - B40 : 99);
            }
        }
        public double H43
        {
            get
            {
                return (B3 == Position.Horizontal ? B551 - B552 : 99);
            }
        }
        public double H60
        {
            get
            {
                return B877;
            }
        }
        public double H61
        {
            get
            {
                return B860;
            }
        }
        public double H63
        {
            get
            {
                return B831;
            }
        }
        public double H64
        {
            get
            {
                return B816;
            }
        }
        public double J72
        {
            get
            {
                return H72 / E32;
            }
        }
        public double J73
        {
            get
            {
                return H73 / E32;
            }
        }
        public double J74
        {
            get
            {
                return H74 / E32;
            }
        }
        public double B35 { get; set; }
        public double H15
        {
            get
            {
                return H7 + 2 * H19 / 12;
            }
        }
        public double B36 { get; set; }
        public double H108
        {
            get
            {
                return VLOOKUP(A108, GetLookupTable(3), H97);
            }
        }
        public double H18
        {
            get
            {
                return H17 / H15;
            }
        }
        public double B37 { get; set; }
        public double B38
        {
            get
            {
                return (B3 == Position.Vertical ? 1.5 : 2.5);
            }
        }
        public double C68
        {
            get
            {
                return Z441; //OHh my gosh!!!
            }
        }
        public double B68 { get; set; }
        public double B81
        {
            get
            {
                return (B3 == Position.Horizontal ? 0.75 : 0.5);
            }
        }
        public double C81
        {
            get
            {
                return B465;
            }
        }
        public double B528
        {
            get
            {
                return ((B3 == Position.Vertical && B517 == Position.Vertical) ? Math.Pow((B527 / 0.7854), 0.5) :
                    Double.NaN //"N/A"
                    );
            }
        }
        public double B506
        {
            get
            {
                return B504 - B505;
            }
        }
        public double B502
        {
            get
            {
                return (B500 < 160 ? 1.5 * (E41 / (E39 * 0.000672)) * (Math.Pow((E33 / E20), 0.5)) * Math.Pow(B500, -0.5) : ((B500 <= 1635 && B501 <= 0.0667) ? 11.78 * (E41 / (E39 * 0.000672)) * (Math.Pow((E33 / E20), 0.5)) * Math.Pow(B501, 0.8) * Math.Pow(B500, -0.333) : ((B500 <= 1635 && B501 > 0.0667) ? 1.35 * (E41 / (E39 * 0.000672)) * (Math.Pow((E33 / E20), 0.5)) * Math.Pow(B500, -0.333) : ((B500 > 1635 && B501 <= 0.0667) ? (E41 / (E39 * 0.000672)) * (Math.Pow((E33 / E20), 0.5)) * Math.Pow(B501, 0.8) : ((B500 > 1635 && B501 > 0.0667) ? 0.1146 * (E41 / (E39 * 0.000672)) * (Math.Pow((E33 / E20), 0.5)) : 0 //"????"
                    )))));
            }
        }
        public double C70
        {
            get
            {
                return B576;
            }
        }
        public double B70 { get; set; }
        public double C69
        {
            get
            {
                return B600;
            }
        }
        public double B69 { get; set; }
        public double I60
        {
            get
            {
                return (B3 == Position.Vertical ? H60 / H17 : H60 / H59);
            }
        }
        public double B550
        {
            get
            {
                return (B514 == GeneralClassification.Mesh ? N131 : (B514 == GeneralClassification.Vane ? M143 : (B514 == GeneralClassification.Cyclone ? O155 : 0.8)));
            }
        }
        public double B549
        {
            get
            {
                return (B514 == GeneralClassification.None ? H7 : (B517 == Position.Vertical ? B545 - B546 - 1.2 * (B542 + C542) : H7 - 1.1 * H7 * (5.6548 * Math.Pow((B529 / B483), 5) - 14.137 * Math.Pow((B529 / B483), 4) + 13.385 * Math.Pow((B529 / B483), 3) - 5.9405 * Math.Pow((B529 / B483), 2) + 2.0325 * (B529 / B483) + 0.002574)));
            }
        }
        public double B551
        {
            get
            {
                return H7 - B877;
            }
        }
        public double B552
        {
            get
            {
                return (B514 == GeneralClassification.Mesh ? O131 : (B514 == GeneralClassification.Vane ? N143 : (B514 == GeneralClassification.Cyclone ? P155 : 0)));
            }
        }
        public double H72
        {
            get
            {
                return (B3 == Position.Vertical ? 0.7854 * Math.Pow(H7, 2) * (H60 - H61) : (B488 - B487) * H8);
            }
        }
        public double H73
        {
            get
            {
                return (B3 == Position.Vertical ? 0.7854 * Math.Pow(H7, 2) * (H61 - H63) : (B487 - B485) * H8);
            }
        }
        public double H74
        {
            get
            {
                return (B3 == Position.Vertical ? 0.7854 * Math.Pow(H7, 2) * (H63 - H64) : (B485 - B484) * H8);
            }
        }
        public double B465
        {
            get
            {
                return B463 / Math.Pow(((E33 - E20) / E20), 0.5);
            }
        }
        public double B527
        {
            get
            {
                return ((B514 == GeneralClassification.None || B517 == Position.Horizontal) ? 0 : B460 * B523 / B526);
            }
        }
        public double B504
        {
            get
            {
                return B475;
            }
        }
        public double B505
        {
            get
            {
                return B571;
            }
        }
        public double B500
        {
            get
            {
                return E33 * B499 * B498 / (E39 * 0.000672);
            }
        }
        public double E41
        {
            get
            {
                return E40 * 0.001 * 2.205;
            }
        }
        public double E39
        {
            get
            {
                return E37 * Math.Pow(E36, E38);
            }
        }
        public double B501
        {
            get
            {
                return E39 * 0.000672 / Math.Pow((E33 * E41 * Math.Pow((E41 / (32.2 * (E33 - E20))), 0.5)), 0.5);
            }
        }
        public double B576
        {
            get
            {
                return (B575 == SettlingLaw.Stokes ? 304800 * Math.Pow((B573 * 18 * E39 / (1488 * 32.2 * (E33 - E20))), 0.5) : (B575 == SettlingLaw.Intermediate ? 304800 * Math.Pow((B573 * Math.Pow(E33, 0.29) * Math.Pow(E39, 0.43) / (3.54 * Math.Pow(32.2, 0.71) * Math.Pow((E33 - E20), 0.71))), (1 / 1.14)) : 304800 * (Math.Pow((B573 / 1.74), 2)) * E33 / (32.2 * (E33 - E20))));
            }
        }
        public double B600
        {
            get
            {
                return J808;
            }
        }
        public double H59
        {
            get
            {
                return H7;
            }
        }
        public double N131
        {
            get
            {
                return VLOOKUP(A131, GetLookupTable(4), N119, false);
            }
        }
        public double M143
        {
            get
            {
                return VLOOKUP(A143, GetLookupTable(5), M119, false);
            }
        }
        public double O155
        {
            get
            {
                return VLOOKUP(A155, GetLookupTable(6), O119, false);
            }
        }
        public double B545
        {
            get
            {
                return 0.9 * H7;
            }
        }
        public double B546
        {
            get
            {
                return (H7 < 6 ? 0.5 : 0.75);
            }
        }
        public double O131
        {
            get
            {
                return VLOOKUP(A131, GetLookupTable(4), O119, false);
            }
        }
        public double N143
        {
            get
            {
                return VLOOKUP(A143, GetLookupTable(5), N119, false);
            }
        }
        public double P155
        {
            get
            {
                return VLOOKUP(A155, GetLookupTable(6), P119, false);
            }
        }
        public double B484
        {
            get
            {
                return B819;
            }
        }
        public double B463
        {
            get
            {
                return B460 / B462;
            }
        }
        public double B475
        {
            get
            {
                _b475 = _b475 ?? (B474 * B463);
                return _b475.Value;
            }
        }
        public double B571
        {
            get
            {
                return B570 * B562;
            }
        }
        public double B499
        {
            get
            {
                return B560 / B488 * B570;
            }
        }
        public double B498
        {
            get
            {
                return 4 * B488 / B497;
            }
        }
        public double E40
        {
            get
            {
                return (1.11591 - 0.00305 * (B17)) * (38.085 - 0.259 * B21) / (1 + 0.02549 * (0.1782 * (Math.Pow(E29, 1.0157))));
            }
        }
        public double E37
        {
            get
            {
                return 10.715 * Math.Pow((E29 + 100), -0.515);
            }
        }
        public double E36
        {
            get
            {
                return 31310000000 / (Math.Pow(B16, 3.444)) * Math.Pow((Math.Log10(B21)), (10.313 * Math.Log10(B16) - 36.447));
            }
        }
        public double E38
        {
            get
            {
                return 5.44 * Math.Pow((E29 + 150), -0.338);
            }
        }
        public SettlingLaw B575
        {
            get
            {
                return (B574 < B897 ? SettlingLaw.Stokes : (B574 < B898 ? SettlingLaw.Intermediate : (B574 < B899 ? SettlingLaw.Newtons : SettlingLaw.OutOfRange)));
            }
        }
        public double B573
        {
            get
            {
                return (B3 == Position.Vertical ? B571 : B588 / (B572 * 60));
            }
        }
        public double O119
        {
            get
            {
                return N119 + 1;
            }
        }
        public double P119
        {
            get
            {
                return O119 + 1;
            }
        }
        public double B570
        {
            get
            {
                return (B567 == BooleanResponse.N ? B566 : (B566 - 1) * C115 + 1);
            }
        }
        public double B562
        {
            get
            {
                return (B3 == Position.Vertical ? B560 / (0.7854 * Math.Pow(H7, 2)) : B560 / B486);
            }
        }
        public double B560
        {
            get
            {
                return E32 - B8 * Z441 / 7.48 / 86400;
            }
        }
        public double B497
        {
            get
            {
                return H7 * Math.Acos(1 - 2 * B877 / H7);
            }
        }
        public double B17
        {
            get
            {
                return (B16 - 32) / 1.8;
            }
        }
        public double B574
        {
            get
            {
                return 304800 * Math.Pow((B573 * 18 * E39 / (1488 * 32.2 * (E33 - E20))), 0.5);
            }
        }
        public double B897
        {
            get
            {
                return 0.025 * 304800 * Math.Pow((Math.Pow(E39, 2) / (32.2 * E33 * (E33 - E20))), 0.333);
            }
        }
        public double B899
        {
            get
            {
                return 18.13 * 304800 * Math.Pow((Math.Pow(E39, 2) / (32.2 * E33 * (E33 - E20))), 0.333);
            }
        }
        public double B898
        {
            get
            {
                return 0.334 * 304800 * Math.Pow((Math.Pow(E39, 2) / (32.2 * E33 * (E33 - E20))), 0.333);
            }
        }
        public double B588
        {
            get
            {
                return Math.Min(B880, 3.2808 * 2.4 * (Math.Pow((0.3048 * B579), 0.66)) * (Math.Pow((0.3048 * B580), 0.66)));
            }
        }
        public double B572
        {
            get
            {
                return B563 / B570;
            }
        }
        public double B566
        {
            get
            {
                return Math.Max(1, (A108 == 1 ? (3.011 - 0.2136 * B565) / (1 + 0.1541 * B565 - 0.01749 * (Math.Pow(B565, 2))) : (A108 == 2 ? (2.002 - 0.02044 * B565) / (1 + 0.14936 * B565 - 0.007879 * (Math.Pow(B565, 2))) : (A108 == 3 ? (1.6002 + 0.05315 * B565) / (1 + 0.15228 * B565 - 0.0045517 * (Math.Pow(B565, 2))) : (A108 == 4 ? (1.3009 + 0.18943 * B565) / (1 + 0.22544 * B565 - 0.0009816 * (Math.Pow(B565, 2))) : (1.3009 + 0.18943 * B565) / (1 + 0.22544 * B565 - 0.0009816 * (Math.Pow(B565, 2))))))));
            }
        }
        public double C115 { get; set; }
        public double B486
        {
            get
            {
                return B483 * (1 / 3.1416 * Math.Acos(1 - 2 * B881) - 2 / 3.1416 * (1 - 2 * B881) * Math.Pow((B881 - Math.Pow(B881, 2)), 0.5));
            }
        }
        public double B880
        {
            get
            {
                return (B831 + B860) / 2;
            }
        }
        public double B579
        {
            get
            {
                return B192 / E108;
            }
        }
        public double B580
        {
            get
            {
                return Math.Pow((B578 / B579 / 0.7854), 0.5);
            }
        }
        public double B563
        {
            get
            {
                return (B3 == Position.Vertical ? 0.7854 * Math.Pow(H7, 2) * B880 / B560 / 60 : H8 / B562 / 60);
            }
        }
        public double B565
        {
            get
            {
                return B880 / H7;
            }
        }
        public double B881
        {
            get
            {
                return B880 / H7;
            }
        }
        public double B192
        {
            get
            {
                return E32 / (B191 * 0.7854 * Math.Pow((B184 / 12), 2));
            }
        }
        public double E108
        {
            get
            {
                return VLOOKUP(A108, GetLookupTable(3), E97);
            }
        }
        public double B578
        {
            get
            {
                return B560;
            }
        }
        public double B191
        {
            get
            {
                return 1 / (1 + 0.33 * Math.Pow((1.2 * B188), 0.92));
            }
        }
        public double B585
        {
            get
            {
                return 0.04 * (Math.Pow(B584, 0.28)) * Math.Pow((B581 / B580), 0.4);
            }
        }
        public double B593
        {
            get
            {
                return 1000000 * (Math.Pow((B590 * 0.001 * E40 / 2), 0.6)) * (Math.Pow((E33 * 16), -0.2)) * (Math.Pow(B592, -0.4));
            }
        }
        public double B597 { get; set; }
        public double B596
        {
            get
            {
                return (B593 - B595) / B595;
            }
        }
        public double B584
        {
            get
            {
                return Math.Pow((B582 / 3.2808), 2) / (9.81 * 0.3048 * B580);
            }
        }
        public double B581
        {
            get
            {
                return B39 + (B877 - B880);
            }
        }
        public double B590 { get; set; }
        public double B592
        {
            get
            {
                return (E33 * 16) * B589 * (Math.Pow((0.3048 * B582), 3)) / (2 * 0.3048 * B591) * (1 - 2 * B589 - (Math.Pow(B589, 2)) * (Math.Pow(B585, 2) - 1));
            }
        }
        public double B595
        {
            get
            {
                return B593 / B594;
            }
        }
        public double B582
        {
            get
            {
                return Math.Pow((Math.Pow(B579, 2) + 2 * 32.17 * B581), 0.5);
            }
        }
        public double B589
        {
            get
            {
                return (B3 == Position.Vertical ? Math.Pow(B583, 2) / Math.Pow(H7, 2) : Math.Pow(B583, 2) / Math.Pow((2 * Math.Pow((H7 * B880 - (Math.Pow(B880, 2))), 0.5)), 2));
            }
        }
        public double B591
        {
            get
            {
                return 0.25 * B588 + 0.1;
            }
        }
        public double B594 { get; set; }
        public double B583
        {
            get
            {
                return Math.Pow((B578 / B582 / 0.7854), 0.5);
            }
        }
        #endregion

        #region J808
        private double? _b576 { get; set; }
        private double? _e33 { get; set; }
        private double? _e20 { get; set; }
        private double? _e39 { get; set; }
        private double? _b571 { get; set; }
        private double? _b588 { get; set; }
        private double? _b593 { get; set; }
        private double? _b596 { get; set; }
        private double? _b585 { get; set; }

        public double GetJ808Value()
        {
            #region Set Variables
            _b576 = B576;
            _e33 = E33;
            _e20 = E20;
            _e39 = E39;
            _b571 = B571;
            _b588 = B588;
            _b593 = B593;
            _b596 = B596;
            _b585 = B585;
            #endregion

            var firstA = 1.0;
            var lastA = _b593.Value - 1;
            var previousA = 1.0;
            var currentA = 1.0;

            var currentC = 0.0;

            var previousD = 0.0;
            var currentD = 0.0;

            var firstE = 0.0;
            var currentE = 0.0;

            var currentF = 0.0;

            var currentI = 0.0;

            var currentJ = 0.0;
            var j808 = 0.0;

            for (int i = 607; i <= 807; i++)
            {
                previousA = currentA;
                previousD = currentD;

                if (i == 607)
                    currentA = firstA;
                else if (i == 807)
                    currentA = lastA;
                else
                    currentA = (lastA - firstA) / 200 + previousA;

                currentC = Math.Log(_b596.Value * currentA / (_b593.Value - currentA));

                currentD = 1 - 0.5 * (1 - MathHelpers.Erf(B597 * currentC));

                if (i == 607)
                    currentE = firstE;
                else
                    currentE = currentD - previousD;

                currentF = currentE * _b585.Value;

                currentI = (B3 == Position.Vertical ? (currentA < _b576.Value ? 0 : 1) : Math.Min(1, Math.Pow((currentA / 304800), 2) * (1488 * 32.2 * (_e33.Value - _e20.Value)) / (18 * _e39.Value) / _b571.Value * H8 / _b588.Value));

                currentJ = currentF * (1 - currentI);

                j808 += currentJ;
            }

            return j808;
        }

        public double J808
        {
            get
            {
                return GetJ808Value();
            }
        }
        #endregion

        #region Z441

        private double? _h235 { get; set; }
        private double? _h237 { get; set; }
        private double? _h236 { get; set; }
        private double? _b216 { get; set; }
        private double? _b454 { get; set; }
        private double? _b481 { get; set; }
        private double? _b891 { get; set; }
        private double? _e25 { get; set; }
        private double? _b475 { get; set; }
        private double? _b482 { get; set; }
        private double? _b892 { get; set; }
        private double? _g131 { get; set; }
        private double? _f131 { get; set; }
        private double? _f143 { get; set; }
        private double? _e143 { get; set; }
        private double? _d143 { get; set; }
        private double? _h131 { get; set; }
        private double? _b536 { get; set; }
        private double? _d155 { get; set; }
        private double? _i155 { get; set; }
        private double? _h155 { get; set; }
        private double? _b531 { get; set; }
        private double? _r235 { get; set; }
        private double? _q446 { get; set; }
        private double? _r237 { get; set; }
        private double? _r236 { get; set; }

        public double H235
        {
            get
            {
                return H233 * H234;
            }
        }
        public double H237
        {
            get
            {
                return B222;
            }
        }
        public double H236
        {
            get
            {
                return (H235 - H233) / H233;
            }
        }
        public double B216
        {
            get
            {
                return E32 * 7.48 * 86400 / B13;
            }
        }
        public GeneralClassification Q231
        {
            get
            {
                return B514;
            }
        }
        public double G131
        {
            get
            {
                return VLOOKUP(A131, GetLookupTable(4), G119, false);
            }
        }
        public double F131
        {
            get
            {
                return VLOOKUP(A131, GetLookupTable(4), F119, false);
            }
        }
        public double F143
        {
            get
            {
                return VLOOKUP(A143, GetLookupTable(5), F119, false);
            }
        }
        public double E143
        {
            get
            {
                return VLOOKUP(A143, GetLookupTable(5), E119, false);
            }
        }
        public double D143
        {
            get
            {
                return VLOOKUP(A143, GetLookupTable(5), D119, false);
            }
        }
        public double B536
        {
            get
            {
                return (B514 == GeneralClassification.Cyclone ? B531 / G155 : Double.NaN);
            }
        }
        public double D155
        {
            get
            {
                return VLOOKUP(A155, GetLookupTable(6), D119, false);
            }
        }
        public double I155
        {
            get
            {
                return VLOOKUP(A155, GetLookupTable(6), I119, false);
            }
        }
        public double R235
        {
            get
            {
                return R233 * R234;
            }
        }
        public double Q446
        {
            get
            {
                return B538;
            }
        }
        public double R237
        {
            get
            {
                return B222;
            }
        }
        public double R236
        {
            get
            {
                return (R235 - R233) / R233;
            }
        }
        public double H233
        {
            get
            {
                return H232 * B218;
            }
        }
        public double H234
        {
            get
            {
                return B219;
            }
        }
        public double B222 { get; set; }
        public double G155
        {
            get
            {
                return VLOOKUP(A155, GetLookupTable(6), G119, false);
            }
        }
        public double R233
        {
            get
            {
                return R232 * H233;
            }
        }
        public double R234
        {
            get
            {
                return B219;
            }
        }
        public double B538
        {
            get
            {
                return (B514 == GeneralClassification.None ? Double.NaN : (B537 / B535 <= 1.03 ? 1 : B537 / B535));
            }
        }
        public double H232
        {
            get
            {
                return B455;
            }
        }
        public double B218
        {
            get
            {
                return 304800 * 0.01 * (E41 / (E20 * Math.Pow(B188, 2))) * (Math.Pow(((B184 / 12) * B188 * E20 / (E25 / 1488)), 0.6667)) * (Math.Pow((E20 / E33), -0.333)) * Math.Pow((E25 / E39), 0.6667);
            }
        }
        public double B219 { get; set; }
        public double R232
        {
            get
            {
                return ((Q446 <= 1 || Double.IsNaN(Q446)) ? 1 : S232);
            }
        }
        public double B535
        {
            get
            {
                return (B514 == GeneralClassification.None ? Double.NaN : B525 * B534);
            }
        }
        public double B455
        {
            get
            {
                return Math.Max(B454, 0.3);
            }
        }
        public double S232 { get; set; }
        public double B534
        {
            get
            {
                return (B514 == GeneralClassification.None
                    ? Double.NaN : Math.Min(1, (B514 == GeneralClassification.Mesh
                    ? 1 - K131 * (B533 - J131) : (B514 == GeneralClassification.Vane
                    ? 1 - J143 * (B533 - I143) : (B514 == GeneralClassification.Cyclone
                    ? 1 - M155 * (B533 - K155) : Double.NaN)))));
            }
        }
        public double K131
        {
            get
            {
                return VLOOKUP(A131, GetLookupTable(4), K119, false);
            }
        }
        public double J131
        {
            get
            {
                return VLOOKUP(A131, GetLookupTable(4), J119, false);
            }
        }
        public double J143
        {
            get
            {
                return VLOOKUP(A143, GetLookupTable(5), J119, false);
            }
        }
        public double I143
        {
            get
            {
                return VLOOKUP(A143, GetLookupTable(5), I119, false);
            }
        }
        public double M155
        {
            get
            {
                return VLOOKUP(A155, GetLookupTable(6), M119, false);
            }
        }
        public double K155
        {
            get
            {
                return VLOOKUP(A155, GetLookupTable(6), K119, false);
            }
        }

        //public double GetZ441Value()
        //{
        //    #region Set Variables
        //    _h235 = H235;
        //    _h237 = H237;
        //    _h236 = H236;
        //    _b216 = B216;
        //    _b454 = B454;
        //    _b481 = B481;
        //    _b891 = B891;
        //    _e25 = E25;
        //    _b475 = B475;
        //    _b482 = B482;
        //    _b892 = B892;
        //    _g131 = G131;
        //    _f131 = F131;
        //    _f143 = F143;
        //    _e143 = E143;
        //    _d143 = D143;
        //    _h131 = H131;
        //    _b536 = B536;
        //    _d155 = D155;
        //    _i155 = I155;
        //    _h155 = H155;
        //    _b531 = B531;
        //    _r235 = R235;
        //    _q446 = Q446;
        //    _r237 = R237;
        //    _r236 = R236;
        //    _e33 = E33;
        //    _e20 = E20;
        //    _q447 = Q447;
        //    _x235 = X235;
        //    _c536 = C536;
        //    _c531 = C531;
        //    #endregion

        //    #region First Iteration Values
        //    var firstH = 1.0;
        //    var lastH = _h235.Value - 1;
        //    var previousH = 0.0;
        //    var currentH = 0.0;

        //    var firstI = 0.0;
        //    var currentI = 0.0;
        //    var i441 = 0.0;

        //    var currentJ = 0.0;
        //    var j441 = 0.0;

        //    var currentL = 0.0;

        //    var currentM = 0.0;
        //    var m441 = 0.0;

        //    var currentP = 0.0;

        //    var currentQ = 0.0;
        //    var q441 = 0.0;
        //    #endregion

        //    #region Get Q441
        //    for (int i = 240; i <= 440; i++)
        //    {
        //        previousH = currentH;

        //        if (i == 240)
        //            currentH = firstH;
        //        else if (i == 440)
        //            currentH = lastH;
        //        else
        //            currentH = (lastH - firstH) / 200 + previousH;

        //        if (i == 240)
        //            currentI = firstI;
        //        else
        //            currentI = (1 - 0.5 * (1 - MathHelpers.Erf(_h237.Value * Math.Log(_h236.Value * currentH / (_h235.Value - currentH))))) - (1 - 0.5 * (1 - MathHelpers.Erf(H237 * Math.Log(_h236.Value * previousH / (_h235.Value - previousH)))));
        //        i441 += currentI;

        //        currentJ = (1 - _b454.Value) * _b216.Value * currentI;
        //        j441 += currentJ;

        //        currentL = (B3 == Position.Vertical ?
        //                (currentH < _b481.Value ? 0 : 1) :
        //                Math.Min(1, (currentH < _b891.Value ?
        //                    Math.Pow((currentH / 304800), 2) * (1488 * 32.2 * (_e33.Value - _e20.Value)) / (18 * _e25.Value) / _b475.Value * H8 / _b482.Value :
        //                    (currentH < _b892.Value ?
        //                        (Math.Pow((currentH / 304800), 1.14)) * 3.54 * (Math.Pow(32.2, 0.71)) * (Math.Pow((_e33.Value - _e20.Value), 0.71)) / ((Math.Pow(_e20.Value, 0.29)) * (Math.Pow(_e25.Value, 0.43))) / _b475.Value * H8 / _b482.Value :
        //                        1.74 * Math.Pow((32.2 * (_e33.Value - _e20.Value) * (currentH / 304800) / _e20.Value), 0.5) / _b475.Value * H8 / _b482.Value))));

        //        currentM = currentJ * (1 - currentL);
        //        m441 += currentM;

        //        currentP = (Q231 == GeneralClassification.None
        //            ? 0
        //            : (Q231 == GeneralClassification.Mesh
        //                ? 1 - Math.Exp(-0.238 * _g131.Value * _h131.Value * Math.Max((-0.1677 * 0.6261 + 0.9949 * (Math.Pow(((_e33.Value - _e20.Value) * _b531.Value * (Math.Pow((currentH * 0.000001 * 3.2808), 2)) / (18 * _e25.Value / 1488 * (_f131.Value / 12))), 1.00493))) / (0.6261 + (Math.Pow(((_e33.Value - _e20.Value) * _b531.Value * (Math.Pow((currentH * 0.000001 * 3.2808), 2)) / (18 * _e25.Value / 1488 * (_f131.Value / 12))), 1.00493))), 0))
        //                : (Q231 == GeneralClassification.Vane
        //                    ? 1 - Math.Exp(-(_e33.Value - _e20.Value) * Math.Pow((currentH * 0.000001 * 3.2808), 2) * _b531.Value * _f143.Value * _e143.Value / (515.7 * (_e25.Value / 1488) * _d143.Value / 12 * Math.Pow((Math.Cos(_e143.Value)), 2)))
        //                    : 1 - Math.Exp(-8 * (_e33.Value - _e20.Value) * Math.Pow((currentH * 0.000001 * 3.2808), 2) * _b536.Value / (18 * _e25.Value / 1488 * _d155.Value / 12) * _h155.Value / 12 / (_d155.Value / 12 * Math.Pow((Math.Tan(_i155.Value / 57.3)), 2))))));

        //        currentQ = (currentP > 0.999 ? 0 : currentM * (1 - currentP));
        //        q441 += currentQ;
        //    }
        //    #endregion            


        //    #region First Iteration Values Cleanup
        //    firstH = 1.0;
        //    lastH = _h235.Value - 1;
        //    previousH = 0.0;
        //    currentH = 0.0;

        //    firstI = 0.0;
        //    currentI = 0.0;

        //    currentJ = 0.0;

        //    currentL = 0.0;

        //    currentM = 0.0;

        //    currentP = 0.0;

        //    currentQ = 0.0;
        //    #endregion

        //    #region Second Iteration New Values
        //    var firstR = 1;
        //    var lastR = _r235.Value - 1;
        //    var previousR = 0.0;
        //    var currentR = 0.0;

        //    var firstS = 0.0;
        //    var currentS = 0.0;
        //    var s441 = 0.0;

        //    var currentT = 0.0;
        //    var t441 = 0.0;

        //    var currentV = 0.0;

        //    var currentW = 0.0;
        //    var w441 = 0.0;

        //    var firstX = 1.0;
        //    var lastX = _x235.Value - 1;
        //    var previousX = 0.0;
        //    var currentX = 0.0;
        //    #endregion

        //    #region Real Iteration for Z441
        //    for (int i = 240; i <= 440; i++)
        //    {
        //        previousH = currentH;
        //        previousR = currentR;
        //        previousX = currentX;

        //        #region Previous Calculated Columns

        //        if (i == 240)
        //            currentH = firstH;
        //        else if (i == 440)
        //            currentH = lastH;
        //        else
        //            currentH = (lastH - firstH) / 200 + previousH;

        //        if (i == 240)
        //            currentI = firstI;
        //        else
        //            currentI = (1 - 0.5 * (1 - MathHelpers.Erf(_h237.Value * Math.Log(_h236.Value * currentH / (_h235.Value - currentH))))) - (1 - 0.5 * (1 - MathHelpers.Erf(H237 * Math.Log(_h236.Value * previousH / (_h235.Value - previousH)))));

        //        currentJ = (1 - _b454.Value) * _b216.Value * currentI;

        //        currentL = (B3 == Position.Vertical ?
        //                (currentH < _b481.Value ? 0 : 1) :
        //                Math.Min(1, (currentH < _b891.Value ?
        //                    Math.Pow((currentH / 304800), 2) * (1488 * 32.2 * (_e33.Value - _e20.Value)) / (18 * _e25.Value) / _b475.Value * H8 / _b482.Value :
        //                    (currentH < _b892.Value ?
        //                        (Math.Pow((currentH / 304800), 1.14)) * 3.54 * (Math.Pow(32.2, 0.71)) * (Math.Pow((_e33.Value - _e20.Value), 0.71)) / ((Math.Pow(_e20.Value, 0.29)) * (Math.Pow(_e25.Value, 0.43))) / _b475.Value * H8 / _b482.Value :
        //                        1.74 * Math.Pow((32.2 * (_e33.Value - _e20.Value) * (currentH / 304800) / _e20.Value), 0.5) / _b475.Value * H8 / _b482.Value))));

        //        currentM = currentJ * (1 - currentL);

        //        currentP = (Q231 == GeneralClassification.None
        //            ? 0
        //            : (Q231 == GeneralClassification.Mesh
        //                ? 1 - Math.Exp(-0.238 * _g131.Value * _h131.Value * Math.Max((-0.1677 * 0.6261 + 0.9949 * (Math.Pow(((_e33.Value - _e20.Value) * _b531.Value * (Math.Pow((currentH * 0.000001 * 3.2808), 2)) / (18 * _e25.Value / 1488 * (_f131.Value / 12))), 1.00493))) / (0.6261 + (Math.Pow(((_e33.Value - _e20.Value) * _b531.Value * (Math.Pow((currentH * 0.000001 * 3.2808), 2)) / (18 * _e25.Value / 1488 * (_f131.Value / 12))), 1.00493))), 0))
        //                : (Q231 == GeneralClassification.Vane
        //                    ? 1 - Math.Exp(-(_e33.Value - _e20.Value) * Math.Pow((currentH * 0.000001 * 3.2808), 2) * _b531.Value * _f143.Value * _e143.Value / (515.7 * (_e25.Value / 1488) * _d143.Value / 12 * Math.Pow((Math.Cos(_e143.Value)), 2)))
        //                    : 1 - Math.Exp(-8 * (_e33.Value - _e20.Value) * Math.Pow((currentH * 0.000001 * 3.2808), 2) * _b536.Value / (18 * _e25.Value / 1488 * _d155.Value / 12) * _h155.Value / 12 / (_d155.Value / 12 * Math.Pow((Math.Tan(_i155.Value / 57.3)), 2))))));

        //        currentQ = (currentP > 0.999 ? 0 : currentM * (1 - currentP));

        //        #endregion

        //        if (i == 240)
        //            currentR = firstR;
        //        else if (i == 440)
        //            currentR = lastR;
        //        else
        //            currentR = (lastR - firstR) / 200 + previousR;

        //        if (i == 240)
        //            currentS = firstS;
        //        else
        //            currentS = ((_q446.Value <= 1 || Double.IsNaN(_q446.Value)) 
        //                ? (q441 == 0 ? 0 : currentQ / q441) 
        //                : (1 - 0.5 * (1 - MathHelpers.Erf(_r237.Value * Math.Log(_r236.Value * currentR / (_r235.Value - currentR))))) - (1 - 0.5 * (1 - MathHelpers.Erf(_r237.Value * Math.Log(_r236.Value * previousR / (_r235.Value - previousR))))));
        //        s441 += currentS;

        //        /*TODO REVIEW*/
        //        currentT = (Q231 == GeneralClassification.None ? currentM : (_q446.Value <= 1 ? currentQ : _q447.Value * m441 * currentS));
        //        t441 += currentT;

        //        currentV = (Z231 == GeneralClassification.None 
        //            ? 0 
        //            : (Z231 == GeneralClassification.Mesh 
        //                ? 1 - Math.Exp(-0.238 * _g131.Value * _h131.Value * Math.Max((-0.1677 * 0.6261 + 0.9949 * (Math.Pow(((_e33.Value - _e20.Value) * _c531.Value * (Math.Pow((currentR * 0.000001 * 3.2808), 2)) / (18 * _e25.Value / 1488 * (_f131.Value / 12))), 1.00493))) / (0.6261 + (Math.Pow(((_e33.Value - _e20.Value) * _c531.Value * (Math.Pow((currentR * 0.000001 * 3.2808), 2)) / (18 * _e25.Value / 1488 * (_f131.Value / 12))), 1.00493))), 0)) 
        //                : (Z231 == GeneralClassification.Vane 
        //                    ? 1 - Math.Exp(-(_e33.Value - _e20.Value) * Math.Pow((currentR * 0.000001 * 3.2808), 2) * _c531.Value * _f143.Value * _e143.Value / (515.7 * (_e25.Value / 1488) * _f143.Value / 12 * Math.Pow((Math.Cos(_e143.Value)), 2))) 
        //                    : 1 - Math.Exp(-8 * (_e33.Value - _e20.Value) * Math.Pow((currentR * 0.000001 * 3.2808), 2) * _c536.Value / (18 * _e25.Value / 1488 * _d155.Value / 12) * _h155.Value / 12 / (_d155.Value / 12 * Math.Pow((Math.Tan(_i155.Value / 57.3)), 2))))));

        //        currentW = currentT * (1 - currentV);
        //        w441 += currentW;

        //        if (i == 240)
        //            currentX = firstX;
        //        else if (i == 440)
        //            currentX = lastX;
        //        else
        //            currentX = (lastX - firstX) / 200 + previousX;

        //    }
        //    #endregion

        //    return 0;
        //}

        private double? _z441;
        public double Z441
        {
            get
            {
                _z441 = _z441 ?? GetZ441Value();
                return _z441.Value;
            }
        }
        #endregion

        #region 441 Table Sum Values
        public double GetJ441Value()
        {

            #region Set Variables
            _h235 = H235;
            _h237 = H237;
            _h236 = H236;
            _b216 = B216;
            _b454 = B454;
            #endregion

            #region First Iteration Values
            var firstH = 1.0;
            var lastH = _h235.Value - 1;
            var previousH = 0.0;
            var currentH = 0.0;

            var firstI = 0.0;
            var currentI = 0.0;

            var currentJ = 0.0;
            var j441 = 0.0;
            #endregion

            #region Get j441
            for (int i = 240; i <= 440; i++)
            {
                previousH = currentH;

                if (i == 240)
                    currentH = firstH;
                else if (i == 440)
                    currentH = lastH;
                else
                    currentH = (lastH - firstH) / 200 + previousH;

                if (i == 240)
                    currentI = firstI;
                else
                    currentI = (1 - 0.5 * (1 - MathHelpers.Erf(_h237.Value * Math.Log(_h236.Value * currentH / (_h235.Value - currentH))))) - (1 - 0.5 * (1 - MathHelpers.Erf(_h237.Value * Math.Log(_h236.Value * previousH / (_h235.Value - previousH)))));

                currentJ = (1 - _b454.Value) * _b216.Value * currentI;
                j441 += currentJ;
            }
            #endregion

            return j441;
        }

        public double GetM441Value()
        {
            #region Set Variables
            _h235 = H235;
            _h237 = H237;
            _h236 = H236;
            _b216 = B216;
            _b454 = B454;
            _b481 = B481;
            _b891 = B891;
            _e25 = E25;
            _e33 = E33;
            _e20 = E20;
            _b475 = B475;
            _b482 = B482;
            _b892 = B892;
            #endregion

            #region First Iteration Values
            var firstH = 1.0;
            var lastH = _h235.Value - 1;
            var previousH = 0.0;
            var currentH = 0.0;

            var firstI = 0.0;
            var currentI = 0.0;
            var i441 = 0.0;

            var currentJ = 0.0;
            var j441 = 0.0;

            var currentL = 0.0;

            var currentM = 0.0;
            var m441 = 0.0;
            #endregion

            #region Get M441
            for (int i = 240; i <= 440; i++)
            {
                previousH = currentH;

                if (i == 240)
                    currentH = firstH;
                else if (i == 440)
                    currentH = lastH;
                else
                    currentH = (lastH - firstH) / 200 + previousH;

                if (i == 240)
                    currentI = firstI;
                else
                    currentI = (1 - 0.5 * (1 - MathHelpers.Erf(_h237.Value * Math.Log(_h236.Value * currentH / (_h235.Value - currentH))))) -
                        (1 - 0.5 * (1 - MathHelpers.Erf(_h237.Value * Math.Log(_h236.Value * previousH / (_h235.Value - previousH)))));
                i441 += currentI;

                currentJ = (1 - _b454.Value) * _b216.Value * currentI;
                j441 += currentJ;

                currentL = (B3 == Position.Vertical ?
                        (currentH < _b481.Value ? 0 : 1) :
                        Math.Min(1, (currentH < _b891.Value ?
                            Math.Pow((currentH / 304800), 2) * (1488 * 32.2 * (_e33.Value - _e20.Value)) / (18 * _e25.Value) / _b475.Value * H8 / _b482.Value :
                            (currentH < _b892.Value ?
                                (Math.Pow((currentH / 304800), 1.14)) * 3.54 * (Math.Pow(32.2, 0.71)) * (Math.Pow((_e33.Value - _e20.Value), 0.71)) /
                                ((Math.Pow(_e20.Value, 0.29)) * (Math.Pow(_e25.Value, 0.43))) / _b475.Value * H8 / _b482.Value :
                                1.74 * Math.Pow((32.2 * (_e33.Value - _e20.Value) * (currentH / 304800) / _e20.Value), 0.5) / _b475.Value * H8 / _b482.Value))));

                currentM = currentJ * (1 - currentL);
                m441 += currentM;
            }
            #endregion

            return m441;
        }

        public double GetQ441Value()
        {
            #region Set Variables
            _h235 = H235;
            _h237 = H237;
            _h236 = H236;
            _b216 = B216;
            _b454 = B454;
            _b481 = B481;
            _b891 = B891;
            _e33 = E33;
            _e20 = E20;
            _e25 = E25;
            _b475 = B475;
            _b482 = B482;
            _b892 = B892;
            _g131 = G131;
            _f131 = F131;
            _f143 = F143;
            _e143 = E143;
            _d143 = D143;
            _h131 = H131;
            _b536 = B536;
            _d155 = D155;
            _i155 = I155;
            _h155 = H155;
            _b531 = B531;
            #endregion

            #region First Iteration Values
            var firstH = 1.0;
            var lastH = _h235.Value - 1;
            var previousH = 0.0;
            var currentH = 0.0;

            var firstI = 0.0;
            var currentI = 0.0;

            var currentJ = 0.0;

            var currentL = 0.0;

            var currentM = 0.0;

            var currentP = 0.0;

            var currentQ = 0.0;
            var q441 = 0.0;
            #endregion

            #region Get Q441
            for (int i = 240; i <= 440; i++)
            {
                previousH = currentH;

                if (i == 240)
                    currentH = firstH;
                else if (i == 440)
                    currentH = lastH;
                else
                    currentH = (lastH - firstH) / 200 + previousH;

                if (i == 240)
                    currentI = firstI;
                else
                    currentI = (1 - 0.5 * (1 - MathHelpers.Erf(_h237.Value * Math.Log(_h236.Value * currentH / (_h235.Value - currentH))))) -
                        (1 - 0.5 * (1 - MathHelpers.Erf(_h237.Value * Math.Log(_h236.Value * previousH / (_h235.Value - previousH)))));

                currentJ = (1 - _b454.Value) * _b216.Value * currentI;

                currentL = (B3 == Position.Vertical ?
                        (currentH < _b481.Value ? 0 : 1) :
                        Math.Min(1, (currentH < _b891.Value ?
                            Math.Pow((currentH / 304800), 2) * (1488 * 32.2 * (_e33.Value - _e20.Value)) / (18 * _e25.Value) / _b475.Value * H8 / _b482.Value :
                            (currentH < _b892.Value ?
                                (Math.Pow((currentH / 304800), 1.14)) * 3.54 * (Math.Pow(32.2, 0.71)) * (Math.Pow((_e33.Value - _e20.Value), 0.71)) /
                                ((Math.Pow(_e20.Value, 0.29)) * (Math.Pow(_e25.Value, 0.43))) / _b475.Value * H8 / _b482.Value :
                                1.74 * Math.Pow((32.2 * (_e33.Value - _e20.Value) * (currentH / 304800) / _e20.Value), 0.5) / _b475.Value * H8 / _b482.Value))));

                currentM = currentJ * (1 - currentL);

                currentP = (Q231 == GeneralClassification.None
                    ? 0
                    : (Q231 == GeneralClassification.Mesh
                        ? 1 - Math.Exp(-0.238 * _g131.Value * _h131.Value * Math.Max((-0.1677 * 0.6261 + 0.9949 *
                        (Math.Pow(((_e33.Value - _e20.Value) * _b531.Value * (Math.Pow((currentH * 0.000001 * 3.2808), 2)) /
                        (18 * _e25.Value / 1488 * (_f131.Value / 12))), 1.00493))) / (0.6261 + (Math.Pow(((_e33.Value - _e20.Value) * _b531.Value *
                        (Math.Pow((currentH * 0.000001 * 3.2808), 2)) / (18 * _e25.Value / 1488 * (_f131.Value / 12))), 1.00493))), 0))
                        : (Q231 == GeneralClassification.Vane
                            ? 1 - Math.Exp(-(_e33.Value - _e20.Value) * Math.Pow((currentH * 0.000001 * 3.2808), 2) * _b531.Value * _f143.Value * _e143.Value /
                            (515.7 * (_e25.Value / 1488) * _d143.Value / 12 * Math.Pow((Math.Cos(_e143.Value)), 2)))
                            : 1 - Math.Exp(-8 * (_e33.Value - _e20.Value) * Math.Pow((currentH * 0.000001 * 3.2808), 2) * _b536.Value /
                            (18 * _e25.Value / 1488 * _d155.Value / 12) * _h155.Value / 12 / (_d155.Value / 12 * Math.Pow((Math.Tan(_i155.Value / 57.3)), 2))))));

                currentQ = (currentP > 0.999 ? 0 : currentM * (1 - currentP));
                q441 += currentQ;
            }
            #endregion

            return q441;
        }

        public double GetT441Value()
        {
            #region Set Variables
            _h235 = H235;
            _h237 = H237;
            _h236 = H236;
            _b216 = B216;
            _b454 = B454;
            _b481 = B481;
            _b891 = B891;
            _e25 = E25;
            _e33 = E33;
            _e20 = E20;
            _b475 = B475;
            _b482 = B482;
            _b892 = B892;
            _g131 = G131;
            _f131 = F131;
            _f143 = F143;
            _e143 = E143;
            _d143 = D143;
            _h131 = H131;
            _b536 = B536;
            _d155 = D155;
            _i155 = I155;
            _h155 = H155;
            _b531 = B531;
            _r235 = R235;
            _q446 = Q446;
            _r237 = R237;
            _r236 = R236;
            _q447 = Q447;
            #endregion

            #region First Iteration Values
            var firstH = 1.0;
            var lastH = _h235.Value - 1;
            var previousH = 0.0;
            var currentH = 0.0;

            var firstI = 0.0;
            var currentI = 0.0;

            var currentJ = 0.0;

            var currentL = 0.0;

            var currentM = 0.0;

            var currentP = 0.0;

            var currentQ = 0.0;

            var firstR = 1;
            var lastR = _r235.Value - 1;
            var previousR = 0.0;
            var currentR = 0.0;

            var firstS = 0.0;
            var currentS = 0.0;

            var currentT = 0.0;
            var t441 = 0.0;
            #endregion

            var q441 = Q441;
            var m441 = M441;

            #region Get T441
            for (int i = 240; i <= 440; i++)
            {
                previousH = currentH;
                previousR = currentR;

                if (i == 240)
                    currentH = firstH;
                else if (i == 440)
                    currentH = lastH;
                else
                    currentH = (lastH - firstH) / 200 + previousH;

                if (i == 240)
                    currentI = firstI;
                else
                    currentI = (1 - 0.5 * (1 - MathHelpers.Erf(_h237.Value * Math.Log(_h236.Value * currentH / (_h235.Value - currentH))))) -
                        (1 - 0.5 * (1 - MathHelpers.Erf(_h237.Value * Math.Log(_h236.Value * previousH / (_h235.Value - previousH)))));

                currentJ = (1 - _b454.Value) * _b216.Value * currentI;

                currentL = (B3 == Position.Vertical ?
                        (currentH < _b481.Value ? 0 : 1) :
                        Math.Min(1, (currentH < _b891.Value ?
                            Math.Pow((currentH / 304800), 2) * (1488 * 32.2 * (_e33.Value - _e20.Value)) / (18 * _e25.Value) / _b475.Value * H8 / _b482.Value :
                            (currentH < _b892.Value ?
                                (Math.Pow((currentH / 304800), 1.14)) * 3.54 * (Math.Pow(32.2, 0.71)) * (Math.Pow((_e33.Value - _e20.Value), 0.71)) /
                                ((Math.Pow(_e20.Value, 0.29)) * (Math.Pow(_e25.Value, 0.43))) / _b475.Value * H8 / _b482.Value :
                                1.74 * Math.Pow((32.2 * (_e33.Value - _e20.Value) * (currentH / 304800) / _e20.Value), 0.5) / _b475.Value * H8 / _b482.Value))));

                currentM = currentJ * (1 - currentL);

                currentP = (Q231 == GeneralClassification.None
                    ? 0
                    : (Q231 == GeneralClassification.Mesh
                        ? 1 - Math.Exp(-0.238 * _g131.Value * _h131.Value * Math.Max((-0.1677 * 0.6261 + 0.9949 *
                        (Math.Pow(((_e33.Value - _e20.Value) * _b531.Value * (Math.Pow((currentH * 0.000001 * 3.2808), 2)) /
                        (18 * _e25.Value / 1488 * (_f131.Value / 12))), 1.00493))) / (0.6261 + (Math.Pow(((_e33.Value - _e20.Value) * _b531.Value *
                        (Math.Pow((currentH * 0.000001 * 3.2808), 2)) / (18 * _e25.Value / 1488 * (_f131.Value / 12))), 1.00493))), 0))
                        : (Q231 == GeneralClassification.Vane
                            ? 1 - Math.Exp(-(_e33.Value - _e20.Value) * Math.Pow((currentH * 0.000001 * 3.2808), 2) * _b531.Value * _f143.Value * _e143.Value /
                            (515.7 * (_e25.Value / 1488) * _d143.Value / 12 * Math.Pow((Math.Cos(_e143.Value)), 2)))
                            : 1 - Math.Exp(-8 * (_e33.Value - _e20.Value) * Math.Pow((currentH * 0.000001 * 3.2808), 2) * _b536.Value /
                            (18 * _e25.Value / 1488 * _d155.Value / 12) * _h155.Value / 12 / (_d155.Value / 12 * Math.Pow((Math.Tan(_i155.Value / 57.3)), 2))))));

                currentQ = (currentP > 0.999 ? 0 : currentM * (1 - currentP));

                if (i == 240)
                    currentR = firstR;
                else if (i == 440)
                    currentR = lastR;
                else
                    currentR = (lastR - firstR) / 200 + previousR;

                if (i == 240)
                    currentS = firstS;
                else
                    currentS = ((_q446.Value <= 1 || Double.IsNaN(_q446.Value))
                        ? (q441 == 0 ? 0 : currentQ / q441)
                        : (1 - 0.5 * (1 - MathHelpers.Erf(_r237.Value * Math.Log(_r236.Value * currentR / (_r235.Value - currentR))))) -
                        (1 - 0.5 * (1 - MathHelpers.Erf(_r237.Value * Math.Log(_r236.Value * previousR / (_r235.Value - previousR))))));

                /*TODO REVIEW*/
                currentT = (Q231 == GeneralClassification.None ? currentM : (_q446.Value <= 1 ? currentQ : _q447.Value * m441 * currentS));
                t441 += currentT;
            }
            #endregion

            return t441;
        }

        public double GetW441Value()
        {
            #region Set Variables
            _h235 = H235;
            _h237 = H237;
            _h236 = H236;
            _b216 = B216;
            _b454 = B454;
            _b481 = B481;
            _b891 = B891;
            _e25 = E25;
            _b475 = B475;
            _b482 = B482;
            _b892 = B892;
            _g131 = G131;
            _f131 = F131;
            _f143 = F143;
            _e143 = E143;
            _d143 = D143;
            _h131 = H131;
            _b536 = B536;
            _d155 = D155;
            _i155 = I155;
            _h155 = H155;
            _b531 = B531;
            _r235 = R235;
            _q446 = Q446;
            _r237 = R237;
            _r236 = R236;
            _e33 = E33;
            _e20 = E20;
            _q447 = Q447;
            _x235 = X235;
            _c536 = C536;
            _c531 = C531;
            #endregion

            #region First Iteration Values
            var firstH = 1.0;
            var lastH = _h235.Value - 1;
            var previousH = 0.0;
            var currentH = 0.0;

            var firstI = 0.0;
            var currentI = 0.0;

            var currentJ = 0.0;

            var currentL = 0.0;

            var currentM = 0.0;
            var m441 = M441;

            var currentP = 0.0;

            var currentQ = 0.0;
            var q441 = Q441;

            var firstR = 1;
            var lastR = _r235.Value - 1;
            var previousR = 0.0;
            var currentR = 0.0;

            var firstS = 0.0;
            var currentS = 0.0;

            var currentT = 0.0;

            var currentV = 0.0;

            var currentW = 0.0;
            var w441 = 0.0;
            #endregion

            #region Get W441
            for (int i = 240; i <= 440; i++)
            {
                previousH = currentH;
                previousR = currentR;

                if (i == 240)
                    currentH = firstH;
                else if (i == 440)
                    currentH = lastH;
                else
                    currentH = (lastH - firstH) / 200 + previousH;

                if (i == 240)
                    currentI = firstI;
                else
                    currentI = (1 - 0.5 * (1 - MathHelpers.Erf(_h237.Value * Math.Log(_h236.Value * currentH / (_h235.Value - currentH))))) -
                        (1 - 0.5 * (1 - MathHelpers.Erf(_h237.Value * Math.Log(_h236.Value * previousH / (_h235.Value - previousH)))));

                currentJ = (1 - _b454.Value) * _b216.Value * currentI;

                currentL = (B3 == Position.Vertical ?
                        (currentH < _b481.Value ? 0 : 1) :
                        Math.Min(1, (currentH < _b891.Value ?
                            Math.Pow((currentH / 304800), 2) * (1488 * 32.2 * (_e33.Value - _e20.Value)) / (18 * _e25.Value) / _b475.Value * H8 / _b482.Value :
                            (currentH < _b892.Value ?
                                (Math.Pow((currentH / 304800), 1.14)) * 3.54 * (Math.Pow(32.2, 0.71)) * (Math.Pow((_e33.Value - _e20.Value), 0.71)) /
                                ((Math.Pow(_e20.Value, 0.29)) * (Math.Pow(_e25.Value, 0.43))) / _b475.Value * H8 / _b482.Value :
                                1.74 * Math.Pow((32.2 * (_e33.Value - _e20.Value) * (currentH / 304800) / _e20.Value), 0.5) / _b475.Value * H8 / _b482.Value))));

                currentM = currentJ * (1 - currentL);

                currentP = (Q231 == GeneralClassification.None
                    ? 0
                    : (Q231 == GeneralClassification.Mesh
                        ? 1 - Math.Exp(-0.238 * _g131.Value * _h131.Value * Math.Max((-0.1677 * 0.6261 + 0.9949 *
                        (Math.Pow(((_e33.Value - _e20.Value) * _b531.Value * (Math.Pow((currentH * 0.000001 * 3.2808), 2)) /
                        (18 * _e25.Value / 1488 * (_f131.Value / 12))), 1.00493))) / (0.6261 + (Math.Pow(((_e33.Value - _e20.Value) * _b531.Value *
                        (Math.Pow((currentH * 0.000001 * 3.2808), 2)) / (18 * _e25.Value / 1488 * (_f131.Value / 12))), 1.00493))), 0))
                        : (Q231 == GeneralClassification.Vane
                            ? 1 - Math.Exp(-(_e33.Value - _e20.Value) * Math.Pow((currentH * 0.000001 * 3.2808), 2) * _b531.Value * _f143.Value * _e143.Value /
                            (515.7 * (_e25.Value / 1488) * _d143.Value / 12 * Math.Pow((Math.Cos(_e143.Value)), 2)))
                            : 1 - Math.Exp(-8 * (_e33.Value - _e20.Value) * Math.Pow((currentH * 0.000001 * 3.2808), 2) * _b536.Value /
                            (18 * _e25.Value / 1488 * _d155.Value / 12) * _h155.Value / 12 / (_d155.Value / 12 * Math.Pow((Math.Tan(_i155.Value / 57.3)), 2))))));

                currentQ = (currentP > 0.999 ? 0 : currentM * (1 - currentP));

                if (i == 240)
                    currentR = firstR;
                else if (i == 440)
                    currentR = lastR;
                else
                    currentR = (lastR - firstR) / 200 + previousR;

                if (i == 240)
                    currentS = firstS;
                else
                    currentS = ((_q446.Value <= 1 || Double.IsNaN(_q446.Value))
                        ? (q441 == 0 ? 0 : currentQ / q441)
                        : (1 - 0.5 * (1 - MathHelpers.Erf(_r237.Value * Math.Log(_r236.Value * currentR /
                        (_r235.Value - currentR))))) - (1 - 0.5 * (1 - MathHelpers.Erf(_r237.Value * Math.Log(_r236.Value * previousR / (_r235.Value - previousR))))));

                /*TODO REVIEW*/
                currentT = (Q231 == GeneralClassification.None ? currentM : (_q446.Value <= 1 ? currentQ : _q447.Value * m441 * currentS));

                currentV = (Z231 == GeneralClassification.None
                    ? 0
                    : (Z231 == GeneralClassification.Mesh
                        ? 1 - Math.Exp(-0.238 * _g131.Value * _h131.Value * Math.Max((-0.1677 * 0.6261 + 0.9949 *
                        (Math.Pow(((_e33.Value - _e20.Value) * _c531.Value * (Math.Pow((currentR * 0.000001 * 3.2808), 2)) /
                        (18 * _e25.Value / 1488 * (_f131.Value / 12))), 1.00493))) / (0.6261 + (Math.Pow(((_e33.Value - _e20.Value) * _c531.Value *
                        (Math.Pow((currentR * 0.000001 * 3.2808), 2)) / (18 * _e25.Value / 1488 * (_f131.Value / 12))), 1.00493))), 0))
                        : (Z231 == GeneralClassification.Vane
                            ? 1 - Math.Exp(-(_e33.Value - _e20.Value) * Math.Pow((currentR * 0.000001 * 3.2808), 2) * _c531.Value * _f143.Value * _e143.Value /
                            (515.7 * (_e25.Value / 1488) * _f143.Value / 12 * Math.Pow((Math.Cos(_e143.Value)), 2)))
                            : 1 - Math.Exp(-8 * (_e33.Value - _e20.Value) * Math.Pow((currentR * 0.000001 * 3.2808), 2) * _c536.Value /
                            (18 * _e25.Value / 1488 * _d155.Value / 12) * _h155.Value / 12 / (_d155.Value / 12 * Math.Pow((Math.Tan(_i155.Value / 57.3)), 2))))));

                currentW = currentT * (1 - currentV);
                w441 += currentW;
            }
            #endregion

            return w441;
        }

        public double GetZ441Value()
        {
            #region Set Variables
            _h235 = H235;
            _h237 = H237;
            _h236 = H236;
            _b216 = B216;
            _b454 = B454;
            _b481 = B481;
            _b891 = B891;
            _e25 = E25;
            _b475 = B475;
            _b482 = B482;
            _b892 = B892;
            _g131 = G131;
            _f131 = F131;
            _f143 = F143;
            _e143 = E143;
            _d143 = D143;
            _h131 = H131;
            _b536 = B536;
            _d155 = D155;
            _i155 = I155;
            _h155 = H155;
            _b531 = B531;
            _r235 = R235;
            _q446 = Q446;
            _r237 = R237;
            _r236 = R236;
            _e33 = E33;
            _e20 = E20;
            _q447 = Q447;
            _x235 = X235;
            _c536 = C536;
            _c531 = C531;
            _x235 = X235;
            _x237 = X237;
            _x236 = X236;
            _x446 = X446;
            _x447 = X447;
            #endregion

            #region First Iteration Values
            var firstH = 1.0;
            var lastH = _h235.Value - 1;
            var previousH = 0.0;
            var currentH = 0.0;

            var firstI = 0.0;
            var currentI = 0.0;

            var currentJ = 0.0;

            var currentL = 0.0;

            var currentM = 0.0;
            var m441 = M441;

            var currentP = 0.0;

            var currentQ = 0.0;
            var q441 = Q441;

            var firstR = 1;
            var lastR = _r235.Value - 1;
            var previousR = 0.0;
            var currentR = 0.0;

            var firstS = 0.0;
            var currentS = 0.0;

            var currentT = 0.0;
            var t441 = T441;

            var currentV = 0.0;

            var currentW = 0.0;
            var w441 = W441;

            var firstX = 1.0;
            var lastX = _x235.Value - 1;
            var previousX = 0.0;
            var currentX = 0.0;

            var firstY = 0.0;
            var previousY = 0.0;
            var currentY = 0.0;

            var previousZ = 0.0;
            var currentZ = 0.0;
            var z441 = 0.0;
            #endregion

            #region Get W441
            for (int i = 240; i <= 440; i++)
            {
                previousH = currentH;
                previousR = currentR;
                previousX = currentX;

                if (i == 240)
                    currentH = firstH;
                else if (i == 440)
                    currentH = lastH;
                else
                    currentH = (lastH - firstH) / 200 + previousH;

                if (i == 240)
                    currentI = firstI;
                else
                    currentI = (1 - 0.5 * (1 - MathHelpers.Erf(_h237.Value * Math.Log(_h236.Value * currentH / (_h235.Value - currentH))))) -
                        (1 - 0.5 * (1 - MathHelpers.Erf(_h237.Value * Math.Log(_h236.Value * previousH / (_h235.Value - previousH)))));

                currentJ = (1 - _b454.Value) * _b216.Value * currentI;

                currentL = (B3 == Position.Vertical ?
                        (currentH < _b481.Value ? 0 : 1) :
                        Math.Min(1, (currentH < _b891.Value ?
                            Math.Pow((currentH / 304800), 2) * (1488 * 32.2 * (_e33.Value - _e20.Value)) / (18 * _e25.Value) / _b475.Value * H8 / _b482.Value :
                            (currentH < _b892.Value ?
                                (Math.Pow((currentH / 304800), 1.14)) * 3.54 * (Math.Pow(32.2, 0.71)) * (Math.Pow((_e33.Value - _e20.Value), 0.71)) /
                                ((Math.Pow(_e20.Value, 0.29)) * (Math.Pow(_e25.Value, 0.43))) / _b475.Value * H8 / _b482.Value :
                                1.74 * Math.Pow((32.2 * (_e33.Value - _e20.Value) * (currentH / 304800) / _e20.Value), 0.5) / _b475.Value * H8 / _b482.Value))));

                currentM = currentJ * (1 - currentL);

                currentP = (Q231 == GeneralClassification.None
                    ? 0
                    : (Q231 == GeneralClassification.Mesh
                        ? 1 - Math.Exp(-0.238 * _g131.Value * _h131.Value * Math.Max((-0.1677 * 0.6261 + 0.9949 *
                        (Math.Pow(((_e33.Value - _e20.Value) * _b531.Value * (Math.Pow((currentH * 0.000001 * 3.2808), 2)) /
                        (18 * _e25.Value / 1488 * (_f131.Value / 12))), 1.00493))) / (0.6261 + (Math.Pow(((_e33.Value - _e20.Value) * _b531.Value *
                        (Math.Pow((currentH * 0.000001 * 3.2808), 2)) / (18 * _e25.Value / 1488 * (_f131.Value / 12))), 1.00493))), 0))
                        : (Q231 == GeneralClassification.Vane
                            ? 1 - Math.Exp(-(_e33.Value - _e20.Value) * Math.Pow((currentH * 0.000001 * 3.2808), 2) * _b531.Value * _f143.Value * _e143.Value /
                            (515.7 * (_e25.Value / 1488) * _d143.Value / 12 * Math.Pow((Math.Cos(_e143.Value)), 2)))
                            : 1 - Math.Exp(-8 * (_e33.Value - _e20.Value) * Math.Pow((currentH * 0.000001 * 3.2808), 2) * _b536.Value /
                            (18 * _e25.Value / 1488 * _d155.Value / 12) * _h155.Value / 12 / (_d155.Value / 12 * Math.Pow((Math.Tan(_i155.Value / 57.3)), 2))))));

                currentQ = (currentP > 0.999 ? 0 : currentM * (1 - currentP));

                if (i == 240)
                    currentR = firstR;
                else if (i == 440)
                    currentR = lastR;
                else
                    currentR = (lastR - firstR) / 200 + previousR;

                if (i == 240)
                    currentS = firstS;
                else
                    currentS = ((_q446.Value <= 1 || Double.IsNaN(_q446.Value))
                        ? (q441 == 0 ? 0 : currentQ / q441)
                        : (1 - 0.5 * (1 - MathHelpers.Erf(_r237.Value * Math.Log(_r236.Value * currentR /
                        (_r235.Value - currentR))))) - (1 - 0.5 * (1 - MathHelpers.Erf(_r237.Value * Math.Log(_r236.Value * previousR / (_r235.Value - previousR))))));

                /*TODO REVIEW*/
                currentT = (Q231 == GeneralClassification.None ? currentM : (_q446.Value <= 1 ? currentQ : _q447.Value * m441 * currentS));

                currentV = (Z231 == GeneralClassification.None
                    ? 0
                    : (Z231 == GeneralClassification.Mesh
                        ? 1 - Math.Exp(-0.238 * _g131.Value * _h131.Value * Math.Max((-0.1677 * 0.6261 + 0.9949 *
                        (Math.Pow(((_e33.Value - _e20.Value) * _c531.Value * (Math.Pow((currentR * 0.000001 * 3.2808), 2)) /
                        (18 * _e25.Value / 1488 * (_f131.Value / 12))), 1.00493))) / (0.6261 + (Math.Pow(((_e33.Value - _e20.Value) * _c531.Value *
                        (Math.Pow((currentR * 0.000001 * 3.2808), 2)) / (18 * _e25.Value / 1488 * (_f131.Value / 12))), 1.00493))), 0))
                        : (Z231 == GeneralClassification.Vane
                            ? 1 - Math.Exp(-(_e33.Value - _e20.Value) * Math.Pow((currentR * 0.000001 * 3.2808), 2) * _c531.Value * _f143.Value * _e143.Value /
                            (515.7 * (_e25.Value / 1488) * _f143.Value / 12 * Math.Pow((Math.Cos(_e143.Value)), 2)))
                            : 1 - Math.Exp(-8 * (_e33.Value - _e20.Value) * Math.Pow((currentR * 0.000001 * 3.2808), 2) * _c536.Value /
                            (18 * _e25.Value / 1488 * _d155.Value / 12) * _h155.Value / 12 / (_d155.Value / 12 * Math.Pow((Math.Tan(_i155.Value / 57.3)), 2))))));

                currentW = currentT * (1 - currentV);

                if (i == 240)
                    currentX = firstX;
                else if (i == 440)
                    currentX = lastX;
                else
                    currentX = (lastX - firstX) / 200 + previousX;

                if (i == 240)
                    currentY = firstY;
                else
                    currentY = ((_x446.Value <= 1 || Double.IsNaN(_x446.Value))
                        ? (w441 == 0
                            ? 0
                            : currentW / w441)
                        : (1 - 0.5 * (1 - MathHelpers.Erf(_x237.Value * Math.Log(_x236.Value * currentX / (_x235.Value - currentX))))) -
                        (1 - 0.5 * (1 - MathHelpers.Erf(_x237.Value * Math.Log(_x236.Value * previousX / (_x235.Value - previousX))))));

                currentZ = (Z231 == GeneralClassification.None ? currentT : (_x446.Value <= 1 ? currentT * (1 - currentV) : _x447.Value * t441 * currentY));
                z441 += currentZ;

            }
            #endregion

            return z441;
        }
        #endregion

        #region Amir

        public double B23 { get; set; }
        public double B26 { get; set; }
        public double B30 { get; set; }
        public double B31 { get; set; }
        public double B59 { get; set; }
        public double B60 { get; set; }
        public double B61 { get; set; }
        public double B71 { get; set; }
        public double B72 { get; set; }

        public double D113 { get; set; }
        public double D114 { get; set; }
        public double D115 { get; set; }

        public double B75 { get { return B174; } }
        public double B76 { get { return B837; } }
        public double B88 { get { return B525; } }
        public double B91 { get { return C525; } }

        public double H14 { get { return H7; } }
        public double H24 { get { return B59 * B57 * (3.1416 * H16 * H17 * H19 / 12 + 2 * B58 * B60 * H20 / 12 * Math.Pow(H16, 2)) + B61 * (B456 + B473 + B569 + B541 + C541) + B59 * (B194 + E182 + H180); } }
        public double H36 { get { return C88 - B88; } }
        public double H40 { get { return C71 - B71; } }
        public double H41 { get { return B3 == Position.Horizontal ? C72 - B72 : -99; } }
        public double H51 { get { return B181; } }
        public double H52 { get { return E175; } }
        public double H53 { get { return H174; } }
        public double H62 { get { return B880; } }
        public double I59 { get { return B3 == Position.Vertical ? double.NaN : H59 / H59; } }
        public double I61 { get { return B3 == Position.Vertical ? H61 / H17 : H61 / H59; } }
        public double I62 { get { return B3 == Position.Vertical ? H62 / H17 : H62 / H59; } }
        public double I63 { get { return B3 == Position.Vertical ? H63 / H17 : H63 / H59; } }
        public double I64 { get { return B3 == Position.Vertical ? H64 / H17 : H64 / H59; } }

        public double C71 { get { return B572; } }
        public double C72 { get { return B3 == Position.Horizontal ? B571 : Double.NaN; } } //"N/A"
        public double C73 { get { return B190; } }
        public FlowPattern C74 { get { return B176; } }
        public double C75 { get { return B186; } }
        public double C76 { get { return B837; } }
        public double C77 { get { return B211; } }
        public double C78 { get { return B214; } }
        public double C79 { get { return B454; } }
        public double C80 { get { return J441; } }
        public double C82 { get { return B474; } }
        public double C83 { get { return B476; } }
        public double C84 { get { return B481; } }
        public double C85 { get { return L441; } }
        public double C86 { get { return M441; } }
        public double C87 { get { return B533; } }
        public double C88 { get { return B537; } }
        public double C89 { get { return T442; } }
        public double C90 { get { return T441; } }
        public double C91 { get { return C537; } }
        public double C92 { get { return Z231 == GeneralClassification.None ? 0 : Z442; } }

        public FlowPattern B176 { get { return FlowPattern.Slug; } } //HLookUp "Inlet flow pattern"!D43
        public double B186 { get { return B169 * Math.Pow(B185, 2); } }
        public double B211 { get { return B210 * B209 / (1 + B210); } }
        public double B214 { get { return B213 * 42; } }
        public double B454
        {
            get
            {

                return Math.Min(1,
                (A108 == 1 ? (B453 > 800 ? 0.1 : (1 - 0.0012323 * B453) / (1 - 0.00109 * B453 + 0.00000022685 * Math.Pow(B453, 2)))
                : (A108 == 2 ? (B453 > 1100 ? 0.1 : (1 - 0.0008757 * B453) / (1 - 0.0007705 * B453 + 0.0000000703 * Math.Pow(B453, 2)))
                : (A108 == 3 ? (B453 > 1800 ? 0.1 : (1 - 0.0005276 * B453) / (1 - 0.00045404 * B453 - 0.00000002055 * Math.Pow(B453, 2)))
                : (A108 == 4 ? (B453 > 9000 ? 0.1 : (1 - 0.00010422 * B453) / (1 - 0.00010216 * B453 + 0.0000000013243 * Math.Pow(B453, 2)))
                : (B453 > 15000 ? 0.1 : (0.9841 - 0.000064214 * B453) / (1 - 0.000065651 * B453 + 0.0000000004124 * Math.Pow(B453, 2))))))));
            }
        }
        public double B476 { get { return B475 / Math.Pow(((E33 - E20) / E20), 0.5); } }
        public double B481
        {
            get  //Replaced 476 TO 480 Due missing text in excel.
            {
                _b481 = _b481 ?? (B3 == Position.Vertical ?
                    (B480 == SettlingLaw.Stokes ? 304800 * Math.Pow((B475 * 18 * E25 / (1488 * 32.2 * (E33 - E20))), 0.5)
                    : (B480 == SettlingLaw.Intermediate ? 304800 * Math.Pow((B475 * Math.Pow(E20, 0.29) * Math.Pow(E25, 0.43) / (3.54 * Math.Pow(32.2, 0.71) * Math.Pow((E33 - E20), 0.71))), (1 / 1.14))
                    : 304800 * (Math.Pow((B475 / 1.74), 2)) * E20 / (32.2 * (E33 - E20))))
                    : (B480 == SettlingLaw.Stokes ? 304800 * Math.Pow((B478 * 18 * E25 / (1488 * 32.2 * (E33 - E20))), 0.5)
                    : (B480 == SettlingLaw.Intermediate ? 304800 * Math.Pow((B478 * Math.Pow(E20, 0.29) * Math.Pow(E25, 0.43) / (3.54 * Math.Pow(32.2, 0.71) * Math.Pow((E33 - E20), 0.71))), (1 / 1.14))
                    : 304800 * (Math.Pow((B478 / 1.74), 2)) * E20 / (32.2 * (E33 - E20)))));
                return _b481.Value;
            }
        }
        public double B533
        {
            get
            {
                return B514 == GeneralClassification.None ? Double.NaN : B532 * E9 / 1440 / B529;
            }
        } //N/A
        public double B537 { get { return B514 == GeneralClassification.None ? Double.NaN : B531 / Math.Pow(((E33 - E20) / E20), 0.5); } } //N/A
        public double C537 { get { return C514 == GeneralClassification.None ? Double.NaN : C531 / Math.Pow(((E33 - E20) / E20), 0.5); } } //N/A
        private double? _j441;
        public double J441
        {
            get
            {
                _j441 = _j441 ?? GetJ441Value();
                return _j441.Value;
            }
        }
        private double? _m441;
        public double M441
        {
            get
            {
                _m441 = _m441 ?? GetM441Value();
                return _m441.Value;
            }
        }
        private double? _q441;
        public double Q441
        {
            get
            {
                _q441 = _q441 ?? GetQ441Value();
                return _q441.Value;
            }
        }
        private double? _t441;
        public double T441
        {
            get
            {
                _t441 = _t441 ?? GetT441Value();
                return _t441.Value;
            }
        }
        public double L441 { get { return (J441 - M441) / J441; } }
        public double T442 { get { return M441 == 0 ? 0 : (M441 - T441) / M441; } }
        public GeneralClassification Z231 { get { return C514; } }
        public double Z442 { get { return T441 == 0 ? 0 : (T441 - Z441) / T441; } }

        public double E9 { get { return (B13 * 1000000 - B12 * E29) * 0.000001; } }
        public double E25 { get { return E22 * Math.Exp(E23 * Math.Pow((E20 / 62.43), E24)); } }
        public double B185 { get { return B168 / (0.7854 * Math.Pow((B184 / 12), 2)); } }
        public double B210 { get { return 0.00000009 * ((B184 / 12 * Math.Pow(B188, 3) * Math.Pow((E33 * E20), 0.5)) / E41) * Math.Pow((Math.Pow(E20, (1 - B205)) * Math.Pow((E25 / 1488), B205) / (Math.Pow(B202, (1 + B205)) * 32.17 * E33)), (1 / (2 - B205))); } }
        public double B209 { get { return 1 - B208 / (E32 * E33); } }
        public double B213 { get { return B212 * 86400 / 5.615 / B13; } }
        public double B453 { get { return B186; } }
        public double B478 { get { return B482 / B477; } }
        private SettlingLaw? _b480;
        public SettlingLaw B480
        {
            get
            {
                _b480 = _b480 ?? (B479 < B891 ? SettlingLaw.Stokes : (B479 < B892 ? SettlingLaw.Intermediate : (B479 < B893 ? SettlingLaw.Newtons : SettlingLaw.OutOfRange)));
                return _b480.Value;
            }
        }
        public double B531 { get { return B530; } }
        public double B532 { get { return B514 == GeneralClassification.None ? Double.NaN : M441; } } //N/A
        public double C531 { get { return C530; } }

        public double C530 { get { return C514 == GeneralClassification.None ? Double.NaN : B460 * B523 / C529; } } //N/A
        public double B202 { get { return Math.Pow(((0.0091 * (0.001 * E40 * 2.2) * B184 / 12) / (E20 * (Math.Pow(B188, 2)))), 0.5); } }
        public double B205 { get { return B204 == SettlingLaw.Stokes ? 1 : (B204 == SettlingLaw.Intermediate ? 0.6 : (B204 == SettlingLaw.Newtons ? 0 : -1)); } } /*"Out of Range"*/
        public double B208 { get { return 0.25 * (E39 / 1488) * 3.1416 * B184 / 12 * B207; } }
        public double B212 { get { return B211 * E32; } }
        public double B477 { get { return H8 / B475; } }
        private double? _b479;
        public double B479
        {
            get
            {
                _b479 = _b479 ?? (B3 == Position.Vertical ?
                    304800 * Math.Pow((B475 * (Math.Pow(E20, 0.29)) * (Math.Pow(E25, 0.43)) / (3.54 * (Math.Pow(32.2, 0.71)) * Math.Pow((E33 - E20), 0.71))), (1 / 1.14))
                    : 304800 * Math.Pow((B478 * (Math.Pow(E20, 0.29)) * (Math.Pow(E25, 0.43)) / (3.54 * (Math.Pow(32.2, 0.71)) * Math.Pow((E33 - E20), 0.71))), (1 / 1.14)));
                return _b479.Value;
            }
        }
        public double B482 { get { return H7 - B877; } }
        public double B530 { get { return B514 == GeneralClassification.None ? Double.NaN : (C514 == GeneralClassification.None ? B460 * B523 / B529 : C530); } } //N/A
        public double B891 { get { return 0.025 * 304800 * Math.Pow((Math.Pow(E25, 2) / (32.2 * E20 * (E33 - E20))), 0.333); } }
        public double B892 { get { return 0.334 * 304800 * Math.Pow((Math.Pow(E25, 2) / (32.2 * E20 * (E33 - E20))), 0.333); } }
        public double B893 { get { return 18.13 * 304800 * Math.Pow((Math.Pow(E25, 2) / (32.2 * E20 * (E33 - E20))), 0.333); } }
        public double E22 { get { return 0.0001 * (((7.77 + 0.0063 * E10) * Math.Pow((B16 + 460), 1.5)) / (122.4 + 12.9 * E10 + (B16 + 460))); } }
        public double E23 { get { return (2.57 + 1914.5 / (B16 + 460) + 0.0095 * E10); } }
        public double E24 { get { return 1.1 + 0.04 * E23; } }

        public SettlingLaw B204 { get { return B203 < B891 ? SettlingLaw.Stokes : (B203 < B892 ? SettlingLaw.Intermediate : (B203 < B893 ? SettlingLaw.Newtons : SettlingLaw.OutOfRange)); } }
        public double B207 { get { return 7.3 * Math.Pow((Math.Log10(B206)), 3) + 44.2 * Math.Pow((Math.Log10(B206)), 2) - 263 * Math.Log10(B206) + 439; } }

        public double B203 { get { return B202 * 0.3048 * 1000000; } }
        public double B206 { get { return (E39 / E25) * Math.Pow((E20 / E33), 0.5); } }

        #endregion


        private double? _q447 { get; set; }
        private double? _c536 { get; set; }
        private double? _c531 { get; set; }

        private double? _x235 { get; set; }
        private double? _x237 { get; set; }
        private double? _x236 { get; set; }
        private double? _x446 { get; set; }
        private double? _x447 { get; set; }

        public double Q447
        {
            get
            {
                return B539;
            }
        }
        public double C536
        {
            get
            {
                return (C514 == GeneralClassification.Cyclone ? C531 / G155 : Double.NaN);
            }
        }
        public double X235
        {
            get
            {
                return X233 * X234;
            }
        }
        public double B539
        {
            get
            {
                return (B514 == GeneralClassification.None ? Double.NaN : (B538 <= 1.03 ? 0 : Math.Min(1 / (0.933708 + 2477.923 * Math.Pow(B538, -35.9901)), 1)));
            }
        }
        public double X233
        {
            get
            {
                return X232 * R233;
            }
        }
        public double X234
        {
            get
            {
                return B219;
            }
        }
        public double X232
        {
            get
            {
                return ((X446 <= 1 || Double.IsNaN(X446)) ? 1 : W232);
            }
        }
        public double X446
        {
            get
            {
                return C538;
            }
        }
        public double W232 { get; set; }
        public double C538
        {
            get
            {
                return (C514 == GeneralClassification.None ? Double.NaN : C537 / C535);
            }
        }
        public double C535
        {
            get
            {
                return (C514 == GeneralClassification.None ? Double.NaN : C525 * C534);
            }
        }
        public double C534
        {
            get
            {
                return (C514 == GeneralClassification.None ? Double.NaN : Math.Min(1, (C514 == GeneralClassification.Mesh ? 1 - M131 * (C533 - J131) : (C514 == GeneralClassification.Vane ? 1 - L143 * (C533 - I143) : (C514 == GeneralClassification.Cyclone ? 1 - N155 * (C533 - K155) : Double.NaN)))));
            }
        }
        public double C533
        {
            get
            {
                return (C514 == GeneralClassification.None ? Double.NaN : C532 * E9 / 1440 / C529);
            }
        }
        public double C532
        {
            get
            {
                return (C514 == GeneralClassification.None ? Double.NaN : T441);
            }
        }
        private double? _w441 { get; set; }
        public double W441
        {
            get
            {
                _w441 = _w441 ?? GetW441Value();
                return _w441.Value;
            }
        }
        public double X237
        {
            get
            {
                return B222;
            }
        }
        public double X236
        {
            get
            {
                return (X235 - X233) / X233;
            }
        }
        public double X447
        {
            get
            {
                return C539;
            }
        }
        public double C539
        {
            get
            {
                return (C514 == GeneralClassification.None ? Double.NaN : Math.Min(1 / (0.933708 + 2477.923 * Math.Pow(C538, -35.9901)), 1));
            }
        }

        /// <summary>
        /// Create a new Separator sizing with default inputs
        /// </summary>
        public SeparatorSizing()
        {
            B57 = 489;
            B58 = 1.09;
            H7 = 6.11927343917312;
            B56 = 0.125;
            B54 = 20000;
            B55 = 1;
            B3 = Position.Horizontal;
            H8 = 2.83267005098296;
            B514 = GeneralClassification.Mesh;
            C514 = GeneralClassification.None;
            B18 = 1000;
            H9 = 0;
            A108 = 3;
            B113 = BooleanResponse.N;
            B114 = BooleanResponse.N;
            B115 = BooleanResponse.N;
            B50 = 0.75;
            B15 = BooleanResponse.N;
            H171 = 3.5;
            B21 = 35;
            B20 = 0.7;
            B29 = 14.7;
            B16 = 100;
            C114 = 0.50; //50%
            E171 = 2500;
            C113 = 0.5; //50%
            B8 = 100;
            B11 = 1.15;
            B7 = 1200;
            B48 = 2;
            B173 = 1;
            A119 = 1;
            B14 = 1;
            A97 = 1;

            #region Nozzle Weights
            K165 = 2;
            L165 = 2;
            L166 = 3;
            L167 = 4;
            L168 = 6;
            L169 = 8;
            L170 = 10;
            L171 = 12;
            L172 = 14;
            L173 = 16;
            L174 = 18;
            L175 = 20;
            L176 = 24;
            L177 = 26;
            L178 = 28;
            L179 = 30;
            L180 = 32;
            M165 = 2.375;
            M166 = 3.5;
            M167 = 4.5;
            M168 = 6.625;
            M169 = 8.625;
            M170 = 10.75;
            M171 = 12.75;
            M172 = 14;
            M173 = 16;
            M174 = 18;
            M175 = 20;
            M176 = 24;
            M177 = 26;
            M178 = 28;
            M179 = 30;
            M180 = 32;
            O165 = 15;
            O166 = 25;
            O167 = 47;
            O168 = 75;
            O169 = 102;
            O170 = 143;
            O171 = 205;
            O172 = 211;
            O173 = 246;
            O174 = 270;
            O175 = 311;
            O176 = 423;
            O177 = 500;
            O178 = 570;
            O179 = 650;
            O180 = 750;
            P165 = 20;
            P166 = 35;
            P167 = 62;
            P168 = 105;
            P169 = 148;
            P170 = 210;
            P171 = 275;
            P172 = 324;
            P173 = 404;
            P174 = 465;
            P175 = 549;
            P176 = 778;
            P177 = 900;
            P178 = 1030;
            P179 = 1160;
            P180 = 1300;
            Q165 = 20;
            Q166 = 36;
            Q167 = 77;
            Q168 = 152;
            Q169 = 207;
            Q170 = 324;
            Q171 = 393;
            Q172 = 471;
            Q173 = 638;
            Q174 = 731;
            Q175 = 916;
            Q176 = 1210;
            Q177 = 1390;
            Q178 = 1600;
            Q179 = 1830;
            Q180 = 2100;
            R165 = 42;
            R166 = 51;
            R167 = 93;
            R168 = 191;
            R169 = 297;
            R170 = 422;
            R171 = 518;
            R172 = 624;
            R173 = 750;
            R174 = 950;
            R175 = 1121;
            R176 = 1865;
            R177 = 2265;
            R178 = 2700;
            R179 = 3100;
            R180 = 3500;
            S165 = 42;
            S166 = 67;
            S167 = 110;
            S168 = 215;
            S169 = 337;
            S170 = 546;
            S171 = 946;
            S172 = 1116;
            S173 = 1371;
            S174 = 1674;
            S175 = 1943;
            S176 = 2936;
            S177 = 3400;
            S178 = 3900;
            S179 = 4400;
            S180 = 4900;
            #endregion

            #region Inlet Device
            A101 = 1;
            A102 = 2;
            A103 = 3;
            A104 = 4;
            A105 = 5;
            B101 = 1; //No inlet device
            B102 = 2; //Diverter/splash plate
            B103 = 3; //Half-open pipe
            B104 = 4; //Multi-vane (Schoepentoeter/Evenflow)
            B105 = 5; //Cyclonic
            C101 = 700;
            C102 = 950;
            C103 = 1400;
            C104 = 4000;
            C105 = 10000;
            E101 = 3;
            E102 = 1.5;
            E103 = 2;
            E104 = 20;
            E105 = 50;
            F101 = 0.4;
            F102 = 0.4;
            F103 = 0.3;
            F104 = 0.2;
            F105 = 0.2;
            G101 = 1.0;
            G102 = 1.5;
            G103 = 1.0;
            G104 = 1.1;
            G105 = 1.1;
            H101 = 0.6;
            H102 = 0.5;
            H103 = 0.45;
            H104 = 0.3;
            H105 = 0.45;
            I101 = 0;
            I102 = 50;
            I103 = 65;
            I104 = 85;
            I105 = 150;
            #endregion

            #region Mesh Pads
            A123 = 0; //None
            A124 = 1; //M1
            A125 = 2; //M2
            A126 = 3; //M3
            A127 = 4; //M4
            B123 = 0; //None
            B124 = 1; //High capacity wire mesh
            B125 = 2; //Standard wire mesh
            B126 = 3; //High eff. wire mesh - 0.011
            B127 = 4; //High eff. wire mesh - 0.006
            C123 = (double)Position.N_A; //None
            C124 = (double)Position.Vertical; //V
            C125 = (double)Position.Vertical; //V
            C126 = (double)Position.Vertical; //V
            C127 = (double)Position.Vertical; //V
            D123 = (double)Position.N_A;
            D124 = 7;
            D125 = 9;
            D126 = 12;
            D127 = 12;
            E123 = (double)Position.N_A;
            E124 = 0.986;
            E125 = 0.982;
            E126 = 0.976;
            E127 = 0.976;
            F123 = (double)Position.N_A;
            F124 = 0.011;
            F125 = 0.011;
            F126 = 0.011;
            F127 = 0.006;
            G123 = (double)Position.N_A;
            G124 = 65;
            G125 = 85;
            G126 = 115;
            G127 = 200;
            H123 = (double)Position.N_A;
            H124 = 0.5;
            H125 = 0.5;
            H126 = 0.5;
            H127 = 0.5;
            I123 = (double)Position.N_A;
            J123 = (double)Position.N_A;
            J124 = 1;
            J125 = 0.75;
            J126 = 0.65;
            J127 = 0.625;
            K123 = (double)Position.N_A;
            K124 = 0.1; //10%
            K125 = 0.1; //10%
            K126 = 0.1; //10%
            K127 = 0.1; //10%
            L123 = (double)Position.N_A;
            M123 = (double)Position.N_A;
            N123 = (double)Position.N_A;
            N124 = 0.75;
            N125 = 0.75;
            N126 = 0.75;
            N127 = 0.75;
            O123 = (double)Position.N_A;
            #endregion

            A131 = 2; //M2 

            #region Vane Packs
            A136 = 0; //None
            A137 = 1; //V1
            A138 = 2; //V2
            A139 = 3; //V3
            B136 = 0; //None
            B137 = 1; //Simple vane design
            B138 = 2; //High performance vane design - single pocket
            B139 = 3; //High performance vane design - double pocket
            C136 = (double)Position.N_A; //None
            C137 = (double)Position.Vertical; //V
            C138 = (double)Position.Vertical; //V
            C139 = (double)Position.Vertical; //V
            D136 = (double)Position.N_A;
            D137 = 0.5;
            D138 = 0.5;
            D139 = 0.5;
            E136 = (double)Position.N_A;
            E137 = 45;
            E138 = 45;
            E139 = 45;
            F136 = (double)Position.N_A;
            F137 = 6;
            F138 = 6;
            F139 = 6;
            G136 = (double)Position.N_A;
            G137 = 0.7;
            G138 = 0.7;
            G139 = 0.7;
            H136 = (double)Position.N_A;
            I136 = (double)Position.N_A;
            I137 = 2;
            I138 = 5;
            I139 = 8;
            J136 = (double)Position.N_A;
            J137 = 0.1; //10%
            J138 = 0.1; //10%
            J139 = 0.1; //10%
            K136 = (double)Position.N_A;
            K137 = 15;
            K138 = 22.5;
            K139 = 30;
            L136 = (double)Position.N_A;
            L137 = 20;
            L138 = 30;
            L139 = 35;
            M136 = (double)Position.N_A;
            M137 = 0.65;
            M138 = 0.65;
            M139 = 0.65;
            N136 = (double)Position.N_A;
            #endregion

            A143 = 3; //v3

            #region Demisting Cyclones
            A149 = 0; //None
            A150 = 1; //C1
            A151 = 2; //C2;
            B149 = 0; //None
            B150 = 1; //2" axial-flow cyclone
            B151 = 2; //3" axial-flow cyclone
            C149 = (double)Position.N_A; //None
            C150 = (double)Position.Vertical; //V
            C151 = (double)Position.Vertical; //V;
            D149 = (double)Position.N_A;
            D150 = 2;
            D151 = 3;
            E149 = (double)Position.N_A;
            E150 = 1.75;
            E151 = 1.75;
            F149 = (double)Position.N_A;
            G149 = (double)Position.N_A;
            H149 = (double)Position.N_A;
            H150 = 10;
            H151 = 15;
            I149 = (double)Position.N_A;
            I150 = 45;
            I151 = 45;
            J149 = (double)Position.N_A;
            J150 = 1.10;
            J151 = 1.30;
            K149 = (double)Position.N_A;
            K150 = 4;
            K151 = 6;
            L149 = (double)Position.N_A;
            L150 = 9;
            L151 = 9;
            M149 = (double)Position.N_A;
            M150 = 0.1; //10%
            M151 = 0.1; //10%
            N149 = (double)Position.N_A;
            N150 = 50;
            N151 = 40;
            O149 = (double)Position.N_A;
            O150 = 0.65;
            O151 = 0.65;
            #endregion

            A155 = 1; //C1

            //Contraints
            B35 = 80;
            B36 = 20;
            B37 = 10;
            B68 = 0.1;
            B70 = 500;
            B69 = 0.02; //2%
            C115 = 0.5; //50%
            B597 = 0.72;
            B590 = 1;
            B594 = 5;

            B23 = 5;
            B26 = 2.65;
            B30 = 60;
            B31 = 14.7;
            B59 = 5;
            B60 = 3;
            B61 = 30;
            B71 = 2;
            B72 = 0.20;
            B222 = 0.72;
            B219 = 5;
            S232 = 2;
            W232 = 2;

            D113 = 12.4;
            D114 = 12.4;
            D115 = 12.4;
        }

        /// <summary>
        /// Create a new Separator sizing based on the previous values
        /// </summary>
        public SeparatorSizing(SeparatorSizing baseline)
        {
            B57 = baseline.B57;
            B58 = baseline.B58;
            H7 = baseline.H7;
            B56 = baseline.B56;
            B54 = baseline.B54;
            B55 = baseline.B55;
            B3 = baseline.B3;
            H8 = baseline.H8;
            B514 = baseline.B514;
            C514 = baseline.C514;
            B18 = baseline.B18;
            H9 = baseline.H9;
            A108 = baseline.A108;
            B113 = baseline.B113;
            B114 = baseline.B114;
            B115 = baseline.B115;
            B50 = baseline.B50;
            B15 = baseline.B15;
            H171 = baseline.H171;
            B21 = baseline.B21;
            B20 = baseline.B20;
            B29 = baseline.B29;
            B16 = baseline.B16;
            C114 = baseline.C114;
            E171 = baseline.E171;
            C113 = baseline.C113;
            B8 = baseline.B8;
            B11 = baseline.B11;
            B7 = baseline.B7;
            B48 = baseline.B48;
            B173 = baseline.B173;
            A119 = baseline.A119;
            B14 = baseline.B14;
            A97 = baseline.A97;

            #region Nozzle Weights
            K165 = baseline.K165;
            L165 = baseline.L165;
            L166 = baseline.L166;
            L167 = baseline.L167;
            L168 = baseline.L168;
            L169 = baseline.L169;
            L170 = baseline.L170;
            L171 = baseline.L171;
            L172 = baseline.L172;
            L173 = baseline.L173;
            L174 = baseline.L174;
            L175 = baseline.L175;
            L176 = baseline.L176;
            L177 = baseline.L177;
            L178 = baseline.L178;
            L179 = baseline.L179;
            L180 = baseline.L180;
            M165 = baseline.M165;
            M166 = baseline.M166;
            M167 = baseline.M167;
            M168 = baseline.M168;
            M169 = baseline.M169;
            M170 = baseline.M170;
            M171 = baseline.M171;
            M172 = baseline.M172;
            M173 = baseline.M173;
            M174 = baseline.M174;
            M175 = baseline.M175;
            M176 = baseline.M176;
            M177 = baseline.M177;
            M178 = baseline.M178;
            M179 = baseline.M179;
            M180 = baseline.M180;
            O165 = baseline.O165;
            O166 = baseline.O166;
            O167 = baseline.O167;
            O168 = baseline.O168;
            O169 = baseline.O169;
            O170 = baseline.O170;
            O171 = baseline.O171;
            O172 = baseline.O172;
            O173 = baseline.O173;
            O174 = baseline.O174;
            O175 = baseline.O175;
            O176 = baseline.O176;
            O177 = baseline.O177;
            O178 = baseline.O178;
            O179 = baseline.O179;
            O180 = baseline.O180;
            P165 = baseline.P165;
            P166 = baseline.P166;
            P167 = baseline.P167;
            P168 = baseline.P168;
            P169 = baseline.P169;
            P170 = baseline.P170;
            P171 = baseline.P171;
            P172 = baseline.P172;
            P173 = baseline.P173;
            P174 = baseline.P174;
            P175 = baseline.P175;
            P176 = baseline.P176;
            P177 = baseline.P177;
            P178 = baseline.P178;
            P179 = baseline.P179;
            P180 = baseline.P180;
            Q165 = baseline.Q165;
            Q166 = baseline.Q166;
            Q167 = baseline.Q167;
            Q168 = baseline.Q168;
            Q169 = baseline.Q169;
            Q170 = baseline.Q170;
            Q171 = baseline.Q171;
            Q172 = baseline.Q172;
            Q173 = baseline.Q173;
            Q174 = baseline.Q174;
            Q175 = baseline.Q175;
            Q176 = baseline.Q176;
            Q177 = baseline.Q177;
            Q178 = baseline.Q178;
            Q179 = baseline.Q179;
            Q180 = baseline.Q180;
            R165 = baseline.R165;
            R166 = baseline.R166;
            R167 = baseline.R167;
            R168 = baseline.R168;
            R169 = baseline.R169;
            R170 = baseline.R170;
            R171 = baseline.R171;
            R172 = baseline.R172;
            R173 = baseline.R173;
            R174 = baseline.R174;
            R175 = baseline.R175;
            R176 = baseline.R176;
            R177 = baseline.R177;
            R178 = baseline.R178;
            R179 = baseline.R179;
            R180 = baseline.R180;
            S165 = baseline.S165;
            S166 = baseline.S166;
            S167 = baseline.S167;
            S168 = baseline.S168;
            S169 = baseline.S169;
            S170 = baseline.S170;
            S171 = baseline.S171;
            S172 = baseline.S172;
            S173 = baseline.S173;
            S174 = baseline.S174;
            S175 = baseline.S175;
            S176 = baseline.S176;
            S177 = baseline.S177;
            S178 = baseline.S178;
            S179 = baseline.S179;
            S180 = baseline.S180;
            #endregion

            #region Inlet Device
            A101 = baseline.A101;
            A102 = baseline.A102;
            A103 = baseline.A103;
            A104 = baseline.A104;
            A105 = baseline.A105;
            B101 = baseline.B101;
            B102 = baseline.B102;
            B103 = baseline.B103;
            B104 = baseline.B104;
            B105 = baseline.B105;
            C101 = baseline.C101;
            C102 = baseline.C102;
            C103 = baseline.C103;
            C104 = baseline.C104;
            C105 = baseline.C105;
            E101 = baseline.E101;
            E102 = baseline.E102;
            E103 = baseline.E103;
            E104 = baseline.E104;
            E105 = baseline.E105;
            F101 = baseline.F101;
            F102 = baseline.F102;
            F103 = baseline.F103;
            F104 = baseline.F104;
            F105 = baseline.F105;
            G101 = baseline.G101;
            G102 = baseline.G102;
            G103 = baseline.G103;
            G104 = baseline.G104;
            G105 = baseline.G105;
            H101 = baseline.H101;
            H102 = baseline.H102;
            H103 = baseline.H103;
            H104 = baseline.H104;
            H105 = baseline.H105;
            I101 = baseline.I101;
            I102 = baseline.I102;
            I103 = baseline.I103;
            I104 = baseline.I104;
            I105 = baseline.I105;
            #endregion

            #region Mesh Pads
            A123 = baseline.A123;
            A124 = baseline.A124;
            A125 = baseline.A125;
            A126 = baseline.A126;
            A127 = baseline.A127;
            B123 = baseline.B123;
            B124 = baseline.B124;
            B125 = baseline.B125;
            B126 = baseline.B126;
            B127 = baseline.B127;
            C123 = baseline.C123;
            C124 = baseline.C124;
            C125 = baseline.C125;
            C126 = baseline.C126;
            C127 = baseline.C127;
            D123 = baseline.D123;
            D124 = baseline.D124;
            D125 = baseline.D125;
            D126 = baseline.D126;
            D127 = baseline.D127;
            E123 = baseline.E123;
            E124 = baseline.E124;
            E125 = baseline.E125;
            E126 = baseline.E126;
            E127 = baseline.E127;
            F123 = baseline.F123;
            F124 = baseline.F124;
            F125 = baseline.F125;
            F126 = baseline.F126;
            F127 = baseline.F127;
            G123 = baseline.G123;
            G124 = baseline.G124;
            G125 = baseline.G125;
            G126 = baseline.G126;
            G127 = baseline.G127;
            H123 = baseline.H123;
            H124 = baseline.H124;
            H125 = baseline.H125;
            H126 = baseline.H126;
            H127 = baseline.H127;
            I123 = baseline.I123;
            J123 = baseline.J123;
            J124 = baseline.J124;
            J125 = baseline.J125;
            J126 = baseline.J126;
            J127 = baseline.J127;
            K123 = baseline.K123;
            K124 = baseline.K124;
            K125 = baseline.K125;
            K126 = baseline.K126;
            K127 = baseline.K127;
            L123 = baseline.L123;
            M123 = baseline.M123;
            N123 = baseline.N123;
            N124 = baseline.N124;
            N125 = baseline.N125;
            N126 = baseline.N126;
            N127 = baseline.N127;
            O123 = baseline.O123;
            #endregion

            A131 = baseline.A131;

            #region Vane Packs
            A136 = baseline.A136;
            A137 = baseline.A137;
            A138 = baseline.A138;
            A139 = baseline.A139;
            B136 = baseline.B136;
            B137 = baseline.B137;
            B138 = baseline.B138;
            B139 = baseline.B139;
            C136 = baseline.C136;
            C137 = baseline.C137;
            C138 = baseline.C138;
            C139 = baseline.C139;
            D136 = baseline.D136;
            D137 = baseline.D137;
            D138 = baseline.D138;
            D139 = baseline.D139;
            E136 = baseline.E136;
            E137 = baseline.E137;
            E138 = baseline.E138;
            E139 = baseline.E139;
            F136 = baseline.F136;
            F137 = baseline.F137;
            F138 = baseline.F138;
            F139 = baseline.F139;
            G136 = baseline.G136;
            G137 = baseline.G137;
            G138 = baseline.G138;
            G139 = baseline.G139;
            H136 = baseline.H136;
            I136 = baseline.I136;
            I137 = baseline.I137;
            I138 = baseline.I138;
            I139 = baseline.I139;
            J136 = baseline.J136;
            J137 = baseline.J137;
            J138 = baseline.J138;
            J139 = baseline.J139;
            K136 = baseline.K136;
            K137 = baseline.K137;
            K138 = baseline.K138;
            K139 = baseline.K139;
            L136 = baseline.L136;
            L137 = baseline.L137;
            L138 = baseline.L138;
            L139 = baseline.L139;
            M136 = baseline.M136;
            M137 = baseline.M137;
            M138 = baseline.M138;
            M139 = baseline.M139;
            N136 = baseline.N136;
            #endregion

            A143 = baseline.A143;

            #region Demisting Cyclones
            A149 = baseline.A149;
            A150 = baseline.A150;
            A151 = baseline.A151;
            B149 = baseline.B149;
            B150 = baseline.B150;
            B151 = baseline.B151;
            C149 = baseline.C149;
            C150 = baseline.C150;
            C151 = baseline.C151;
            D149 = baseline.D149;
            D150 = baseline.D150;
            D151 = baseline.D151;
            E149 = baseline.E149;
            E150 = baseline.E150;
            E151 = baseline.E151;
            F149 = baseline.F149;
            G149 = baseline.G149;
            H149 = baseline.H149;
            H150 = baseline.H150;
            H151 = baseline.H151;
            I149 = baseline.I149;
            I150 = baseline.I150;
            I151 = baseline.I151;
            J149 = baseline.J149;
            J150 = baseline.J150;
            J151 = baseline.J151;
            K149 = baseline.K149;
            K150 = baseline.K150;
            K151 = baseline.K151;
            L149 = baseline.L149;
            L150 = baseline.L150;
            L151 = baseline.L151;
            M149 = baseline.M149;
            M150 = baseline.M150;
            M151 = baseline.M151;
            N149 = baseline.N149;
            N150 = baseline.N150;
            N151 = baseline.N151;
            O149 = baseline.O149;
            O150 = baseline.O150;
            O151 = baseline.O151;
            #endregion

            A155 = baseline.A155;

            //Contraints
            B35 = baseline.B35;
            B36 = baseline.B36;
            B37 = baseline.B37;
            B68 = baseline.B68;
            B70 = baseline.B70;
            B69 = baseline.B69;
            C115 = baseline.C115;
            B597 = baseline.B597;
            B590 = baseline.B590;
            B594 = baseline.B594;

            B23 = baseline.B23;
            B26 = baseline.B26;
            B30 = baseline.B30;
            B31 = baseline.B31;
            B59 = baseline.B59;
            B60 = baseline.B60;
            B61 = baseline.B61;
            B71 = baseline.B71;
            B72 = baseline.B72;
            B222 = baseline.B222;
            B219 = baseline.B219;
            S232 = baseline.S232;
            W232 = baseline.W232;

            D113 = baseline.D113;
            D114 = baseline.D114;
            D115 = baseline.D115;
        }

        /// <summary>
        /// Solve the model using FrontLine Solver
        /// </summary>
        public static SeparatorSizing Solve(SeparatorSizing model)
        {
            //Prepare the Solver Vars and Constraints
            double[] ub_cons = { 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 };
            double[] lb_cons = { 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 };

            double[] ub = { 20, 80 };
            double[] lb = { 2, 1.5 };

            using (Problem prob = new Problem(Solver_Type.Minimize, 2, 21))
            {
                prob.FcnConstraint.UpperBound.Array = ub_cons;
                prob.FcnConstraint.LowerBound.Array = ub_cons;

                prob.VarDecision.NonNegative();
                prob.VarDecision.UpperBound.Array = ub;
                prob.VarDecision.LowerBound.Array = lb;

                prob.ProblemType = Problem_Type.OptNSP;
                prob.Engine = prob.Engines[Engine.EVOName];
                prob.Engine.Params["Convergence"].Value = 0.00001;
                prob.Engine.Params["MutationRate"].Value = 0.9;
                prob.Engine.Params["PopulationSize"].Value = 180;
                prob.Engine.Params["RandomSeed"].Value = 0;
                prob.Engine.Params["MaxTimeNoImp"].Value = 45;
                prob.Engine.Params["RequireBounds"].Value = 1;

                prob.Engine.Params["Precision"].Value = 0.00001;
                prob.Engine.Params["Scaling"].Value = 1;
                prob.Engine.Params["SolveWithout"].Value = 1;
                prob.Engine.Params["MaxTime"].Value = 120;
                prob.Engine.Params["Iterations"].Value = 200;
                prob.Engine.Params["MaxSubProblems"].Value = 1000;
                prob.Engine.Params["MaxFeasibleSols"].Value = 1000;

                prob.Evaluators[Eval_Type.Function].OnEvaluate += (e) =>
                {
                    var localModel = model;
                    var h7 = e.Problem.VarDecision.Value[0];
                    var h8 = e.Problem.VarDecision.Value[1];

                    var sepSize = new SeparatorSizing(localModel);
                    sepSize.H7 = h7;
                    sepSize.H8 = h8;

                    e.Problem.FcnConstraint.Value[0] = sepSize.K73 >= sepSize.B48 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[1] = sepSize.I74 >= sepSize.B49 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[2] = sepSize.K72 >= sepSize.B50 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[3] = sepSize.I73 >= sepSize.B47 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[4] = sepSize.H9 >= 0 && sepSize.H9 <= 1.5 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[5] = sepSize.I72 >= sepSize.B49 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[6] = sepSize.K74 >= sepSize.B50 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[7] = sepSize.H31 <= 0 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[8] = sepSize.H42 <= 0 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[9] = sepSize.H43 >= 0 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[10] = sepSize.H44 >= 0 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[11] = sepSize.H39 <= 0 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[12] = sepSize.H38 <= 0 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[13] = sepSize.H37 <= 0 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[14] = sepSize.H35 >= 0 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[15] = sepSize.H34 <= 0 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[16] = sepSize.H32 >= 0 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[17] = sepSize.H33 <= 0 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[18] = sepSize.H29 <= 0 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[19] = sepSize.H28 <= 0 ? 1 : 0;
                    e.Problem.FcnConstraint.Value[20] = sepSize.H30 >= 0 ? 1 : 0;

                    e.Problem.FcnObjective.Value[e.Problem.ObjectiveIndex] = sepSize.H21;

                    return Engine_Action.Continue;
                };

                prob.Solver.Optimize();

                var _h7 = prob.VarDecision.FinalValue[0];
                var _h8 = prob.VarDecision.FinalValue[1];
                SeparatorSizing result = new SeparatorSizing(model);
                result.H7 = _h7;
                result.H8 = _h8;

                return result;
            }
        }
    }
}
