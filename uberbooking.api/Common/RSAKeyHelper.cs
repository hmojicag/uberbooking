using System.Security.Cryptography;

namespace uberbooking.api.Common {
    public class RSAKeyHelper {
        public static RSAParameters GenerateKey()
        {
            using (var key = new RSACryptoServiceProvider(2048))
            {
                return key.ExportParameters(true);
            }
        }
    }
}