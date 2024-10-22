namespace hackathon_backend.Models
{

    public enum Portal
    {
        Pracuj_pl,
        The_Protocol
    }

    public static class PortalExtensions
    {
        /// <summary>
        /// Converts the Portal enum value to a friendly string representation.
        /// </summary>
        /// <param name="portal">The Portal enum value to convert.</param>
        /// <returns>The friendly string representation of the Portal enum value.</returns>
        public static string ToFriendlyString(this Portal portal)
        {
            return portal switch
            {
                Portal.Pracuj_pl => "Pracuj.pl",
                Portal.The_Protocol => "TheProtocol",
                _ => "Unknown"
            };
        }

        /// <summary>
        /// Converts a string representation to the corresponding Portal enum value.
        /// Options: "pracuj.pl", "theprotocol"
        /// </summary>
        /// <param name="portal">The string representation of the Portal.</param>
        /// <returns>The corresponding Portal enum value.</returns>
        public static Portal FromString(this string portal)
        {
            return portal.ToLower() switch
            {
                "pracuj.pl" => Portal.Pracuj_pl,
                "theprotocol" => Portal.The_Protocol,
                _ => throw new ArgumentException("Unknown portal")
            };
        }
    }
}

