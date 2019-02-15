using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using hrapp.Models;
using Microsoft.AspNetCore.Cors;

namespace hrapp.Controllers
{
    public class HomeController : Controller
    {
        [EnableCors("AllowMyOrigin")]
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Profile()
        {
            return View();
        }
        public IActionResult Employees()
        {
            return View();
        }
        public IActionResult Jobs()
        {
            return View();
        }
        public IActionResult News()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
