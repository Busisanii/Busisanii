using B_Majozi_Practical_Assignment.ServiceReference1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace B_Majozi_Practical_Assignment
{
    public partial class Survey : System.Web.UI.Page
    {
        Service1Client client = new Service1Client();
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {

            client.setUser(userName.Text, email.Text, DateTime.Parse(dateOfB.Text), ContNum.Text
                ,cbPizza.Checked, cbPasta.Checked,cbPapWors.Checked,cbOther.Checked);
        }
    }
}