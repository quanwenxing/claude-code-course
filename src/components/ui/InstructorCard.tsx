interface InstructorCardProps {
  instructor: {
    name: string
    title: string
    image: string
    experience: string
    certifications: string[]
    achievements: string[]
    specialties: string[]
  }
}

export default function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl shadow-2xl overflow-hidden border border-white/20">
      <div className="flex flex-col lg:flex-row">
        {/* Profile Image Section */}
        <div className="lg:w-1/3 p-8 flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-xl mb-6">
            <img 
              src={instructor.image} 
              alt={instructor.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-center mb-2">{instructor.name}</h3>
          <p className="text-blue-100 text-center text-sm mb-4">{instructor.title}</p>
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-yellow-300 font-semibold">{instructor.experience}年の経験</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-2/3 p-8 space-y-8">
          {/* Certifications */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm mr-3">🏆</span>
              主要資格・認定
            </h4>
            <div className="flex flex-wrap gap-2">
              {instructor.certifications.map((cert, index) => (
                <span 
                  key={index}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center text-white text-sm mr-3">⚡</span>
              専門分野
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {instructor.specialties.map((specialty, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-3 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <span className="text-gray-700 font-medium">{specialty}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center text-white text-sm mr-3">🌟</span>
              主な実績
            </h4>
            <div className="space-y-3">
              {instructor.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}