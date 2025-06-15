interface SectionHeaderProps {
  title: string
  subtitle: string
  centered?: boolean
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  centered = true 
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        {subtitle}
      </p>
      
      {/* Decorative line */}
      <div className="mt-8 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
      </div>
    </div>
  )
}