using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime.InteropServices;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace IService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.
    public class Service1 : IService1
    {

        public string getContact(string ContactNum)
        {
            throw new NotImplementedException();
        }

        public DateTime getDateofB(DateTime dateofB)
        {
            throw new NotImplementedException();
        }

        public string getUser(int userId)
        {
            throw new NotImplementedException();
        }

        public string getUserEmail(string userEmail)
        {
            throw new NotImplementedException();
        }

        public string getUserName(string userName)
        {

            throw new NotImplementedException();
        }
        private  string getConnection(){

            string connectio = "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=\"C:\\Users\\Busisani Majozi\\Desktop\\Busisani_Majozi_Assignment\\IService\\IService\\App_Data\\DbSurvey.mdf\";Integrated Security=True";
            return connectio;
        }
        public string setUser(string userName, string userEmai, DateTime dateofB, string ContactNum , bool pizza
            ,bool pasta, bool papwor, bool other)
        {
           
            try
            {
                
                using (var connection = new SqlConnection(getConnection()))
                {
                    connection.Open();
                    SqlCommand cmd = new SqlCommand($@"INSERT INTO [dbo].[User] ([User_Name], [User_Email],[User_DoB], [User_ContactNum]) VALUES (@name, @email, @dob, @num)", connection);
                    cmd.Parameters.AddWithValue("@name", userName);
                    cmd.Parameters.AddWithValue("@email", userEmai);
                    cmd.Parameters.AddWithValue("@dob", dateofB);
                    cmd.Parameters.AddWithValue("@num", ContactNum);
                    cmd.ExecuteNonQuery();
                    //cmd = new SqlCommand($@"SELECT * FROM [dbo.User]", connection);
                    //SqlDataReader reader = cmd.ExecuteReader();
                    //int count = 0;
                    //if (reader.HasRows)
                    //{
                        
                    //}

                    cmd = new SqlCommand($@"INSERT INTO [dbo].[Food] ([Pizza], [Pasta], [Pap_Wor], [Other], [IdUser]) VALUES (@pizza, @pasta, @papwor, @other, @idu)", connection);
                   
                    cmd.Parameters.AddWithValue("@pizza", pizza ? 1 : 0);
                    cmd.Parameters.AddWithValue("@pasta", pasta ? 1 : 0);
                    cmd.Parameters.AddWithValue("@papwor", papwor ? 1 : 0);
                    cmd.Parameters.AddWithValue("@other", other ? 1 : 0);
                    cmd.Parameters.AddWithValue("@idu", 4);
                    cmd.ExecuteNonQuery();
                }

                return "Success";

            }
            catch (Exception e)
            {
                return "Error -- " + e.Message;
            }
        }
    }
}
