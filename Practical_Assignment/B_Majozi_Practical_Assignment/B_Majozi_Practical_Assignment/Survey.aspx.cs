using B_Majozi_Practical_Assignment.ServiceReference1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text.RegularExpressions;
using System.Windows.Forms;

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
            string Cellnum = "";
           Regex regex1 = new Regex("^([0-9]{10})$");
            if (!regex1.IsMatch(ContNum.Text.Trim()))
            {
                 Cellnum = ContNum.Text.Trim();
            }
            else
            {
               // ErrorMessage = "Enter a valid mobile phone number";
            }

            DateTime bday = DateTime.Parse(dateOfB.Text);
            DateTime today = DateTime.Today;
            int age = today.Year - bday.Year;
            if (age < 5 && age >120)
            {
                // MessageBox.show("Invalid Birth Day");
                // Initializes the variables to pass to the MessageBox.Show method.
                string message = "Invalid Birth Day. Cancel this operation?";
                string caption = "Error Detected in Input";
                MessageBoxButtons buttons = MessageBoxButtons.YesNo;
                DialogResult result;

                // Displays the MessageBox.
                result = MessageBox.Show(message, caption, buttons);
            }

            client.setUser(userName.Text, email.Text, bday, Cellnum
                ,cbPizza.Checked, cbPasta.Checked,cbPapWors.Checked,cbOther.Checked);
        }
    }
}