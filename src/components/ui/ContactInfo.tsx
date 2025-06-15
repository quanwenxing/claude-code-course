export default function ContactInfo() {
  const contactItems = [
    {
      icon: "📧",
      label: "メール",
      value: "info@claudecode-master.com",
      href: "mailto:info@claudecode-master.com"
    },
    {
      icon: "📞",
      label: "電話",
      value: "03-1234-5678",
      href: "tel:03-1234-5678"
    },
    {
      icon: "⏰",
      label: "営業時間",
      value: "平日 9:00-18:00",
      href: null
    },
    {
      icon: "📍",
      label: "所在地",
      value: "東京都渋谷区",
      href: null
    }
  ]

  return (
    <div className="space-y-4">
      {contactItems.map((item, index) => (
        <div key={index} className="flex items-center space-x-3">
          <span className="text-lg">{item.icon}</span>
          <div>
            <div className="text-gray-400 text-xs uppercase tracking-wide">{item.label}</div>
            {item.href ? (
              <a 
                href={item.href} 
                className="text-gray-300 hover:text-blue-300 transition-colors duration-300"
              >
                {item.value}
              </a>
            ) : (
              <span className="text-gray-300">{item.value}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}