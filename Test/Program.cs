﻿using SolverSdk;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            Debug.Listeners.Add(new ConsoleTraceListener());

            var se = new SeparatorSizing();

            SeparatorSizing.Solve(se);


            Console.ReadKey();
        }
    }
}
