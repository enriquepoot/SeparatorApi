using Business.Entities;
using SolverSdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SeparatorAPI.Controllers
{
    public class OptionsController : ApiController
    {
        [Route("Api/Options/Positions")]
        public IEnumerable<ComboItem> GetPositions()
        {
            return GetComboItemsByType(typeof(SeparatorSizing.Position));
        }
        [Route("Api/Options/Responses")]
        public IEnumerable<ComboItem> GetBooleanResponse()
        {
            return GetComboItemsByType(typeof(SeparatorSizing.BooleanResponse));
        }
        [Route("Api/Options/GralClasifications")]
        public IEnumerable<ComboItem> GetGralClassification()
        {
            return GetComboItemsByType(typeof(SeparatorSizing.GeneralClassification));
        }
        private IEnumerable<ComboItem> GetComboItemsByType(Type t)
        {
            return Enum
                .GetNames(t)
                .Select(name => new ComboItem
                {
                    Id = (int)Enum.Parse(t, name),
                    Name = name
                }).ToArray();
        }
    }
}
