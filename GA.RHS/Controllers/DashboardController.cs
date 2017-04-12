using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GA.RHS.EnityFramework;
using System.Web.Http.Cors;
namespace GA.RHS.Controllers
{
    [EnableCors(origins:"*",headers:"*",methods:"*")]
    public class DashboardController : ApiController
    {
        [HttpGet]
        [Route("dashboard/kpi")]
        public IHttpActionResult getKPI()
        {
            using (RHSEntities db = new RHSEntities())
            {
                int total =db.latest_scores.Count();
                int aTotal = db.latest_scores.Where(s=>s.ins_grade=="A").Count();
                int bTotal = db.latest_scores.Where(s => s.ins_grade == "B").Count();
                int cTotal = db.latest_scores.Where(s => s.ins_grade == "C").Count();
                int dTotal = db.latest_scores.Where(s => s.ins_grade == "D").Count();
                return Ok(new { Total=total,ATotal=aTotal,BTotal=bTotal,CTotal=cTotal });
            }
        }
    }
}
