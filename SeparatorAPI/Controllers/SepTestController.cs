using SolverSDK;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SeparatorAPI.Controllers
{
    public class SepTestController : ApiController
    {
        [Route("Api/Test/{times}")]
        public IEnumerable<long> GetPositions(int times)
        {
            var list = new List<long>();
            for(var i = 0; i <times ; i++ )
            {
                var sw = Stopwatch.StartNew();
                var _x = new SeparatorSizing();
                list.Add(sw.ElapsedMilliseconds);
            }

            return list;
        }
    }
}
