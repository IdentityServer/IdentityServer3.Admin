using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using Microsoft.Owin.Security.DataProtection;

namespace IdentityAdmin.Configuration
{
    /// <summary>
    /// X.509 certificate based data protector
    /// </summary>
    public class X509CertificateTicketDataProtector : IDataProtector
    {
        private readonly RSACryptoServiceProvider _encryptor;
        private readonly RSACryptoServiceProvider _decryptor;

        /// <summary>
        /// Initializes a new instance of the <see cref="X509CertificateTicketDataProtector"/> class.
        /// </summary>
        /// <param name="certificate">The certificate.</param>
        public X509CertificateTicketDataProtector(X509Certificate2 certificate)
        {
            _encryptor = certificate.PublicKey.Key as RSACryptoServiceProvider;
            _decryptor = (RSACryptoServiceProvider)certificate.PrivateKey;
        }

        /// <summary>
        /// Protects the specified data.
        /// </summary>
        /// <param name="data">The data.</param>
        /// <returns></returns>
        public byte[] Protect(byte[] data)
        {
            var encrypted = _encryptor.Encrypt(data, true);
            return encrypted;
        }

        /// <summary>
        /// Unprotects the specified data.
        /// </summary>
        /// <param name="data">The data.</param>
        /// <returns></returns>
        public byte[] Unprotect(byte[] data)
        {
            return _decryptor.Decrypt(data, true);
        }
    }
}
