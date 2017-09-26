using System.IdentityModel;
using System.Security.Cryptography.X509Certificates;
using Microsoft.Owin.Security.DataProtection;

namespace IdentityAdmin.Configuration
{
    /// <summary>
    /// X.509 certificate based data protector
    /// </summary>
    public class X509CertificateTicketDataProtector : IDataProtector
    {
        private readonly RsaSignatureCookieTransform _signatureTransform;
        private readonly RsaEncryptionCookieTransform _encryptTransform;

        /// <summary>
        /// Initializes a new instance of the <see cref="X509CertificateTicketDataProtector"/> class.
        /// </summary>
        /// <param name="certificate">The certificate.</param>
        public X509CertificateTicketDataProtector(X509Certificate2 certificate)
        {
            _signatureTransform = new RsaSignatureCookieTransform(certificate);
            _encryptTransform = new RsaEncryptionCookieTransform(certificate);
        }

        /// <summary>
        /// Protects the specified data.
        /// </summary>
        /// <param name="data">The data.</param>
        /// <returns></returns>
        public byte[] Protect(byte[] data)
        {
            var encrypted = encryptTransform.Encode(userData);
            var signed = signatureTransform.Encode(encrypted);
            return signed;
        }

        /// <summary>
        /// Unprotects the specified data.
        /// </summary>
        /// <param name="data">The data.</param>
        /// <returns></returns>
        public byte[] Unprotect(byte[] data)
        {
            var unsigned = signatureTransform.Decode(protectedData);
            var decrypted = encryptTransform.Decode(unsigned);
            return decrypted;
        }
    }
}
