using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace IService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IService1" in both code and config file together.
    [ServiceContract]
    public interface IService1
    {

        // TODO: Add your service operations here
        [OperationContract]
        string getUser(int userId);

        [OperationContract]
        string getUserName(string userName);
        [OperationContract]
        string getUserEmail(string userEmail);
        [OperationContract]
        DateTime getDateofB(DateTime dateofB);
        [OperationContract]
        string getContact(string ContactNum);

        [OperationContract]
        string setUser(string userName,string userEmai,DateTime dateofB,string ContactNum,bool pizza
            ,bool past, bool papwor, bool other);

    }
    public class UID
    {

        [DataMember]
        public string UserId { get; set; }
    }



}
