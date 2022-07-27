# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
DanceClass.destroy_all
Registration.destroy_all
Teacher.destroy_all
Review.destroy_all

puts "Seeding users.."
user1 = User.create(email: "sarahrexmakes@gmail.com", first_name: "Sarah", last_name: "Rex", address: "10 Surrey Ln", phone: "516-428-5941", username: "Sarah", password: "password", admin: true)
user2 = User.create(email: "default@default.com", first_name: "Briana", last_name: "Rex", address: "10 Surrey Ln", phone: "516-946-2121", username: "Briana", password: "password", admin: false)
user3 = User.create(email: "default@default.com",first_name: "Ashley", last_name: "Kolln", address: "113 Eden Ave", phone: "516-798-4667", username: "Ashley", password: "password", admin: false)
user4 = User.create(email: "default@default.com",first_name: "Liz", last_name: "Smith", address: "1 Main St", phone: "516-558-9632", username: "Liz", password: "password", admin: false)
user5 = User.create(email: "default@default.com",first_name: "Darlene", last_name: "White", address: "45 Longerton Dr", phone: "516-987-4561", username: "Darlene", password: "password", admin: false)
user6 = User.create(email: "default@default.com",first_name: "Jessica", last_name: "Hooper", address: "9 Friendship St", phone: "516-852-9512", username: "Jessica", password: "password", admin: false)
user7 = User.create(email: "default@default.com",first_name: "Christine", last_name: "McKeeny", address: "10-10 7th St", phone: "516-753-1547", username: "Christine", password: "password", admin: false)
user8 = User.create(email: "default@default.com",first_name: "Leena", last_name: "Meena", address: "35 Numot Ct", phone: "516-797-4652", username: "Leena", password: "password", admin: false)
user9 = User.create(email: "default@default.com",first_name: "Waldo", last_name: "Unknown", address: "Somewhere", phone: "516-666-6666", username: "Waldo", password: "password", admin: false)


puts "Seeding teachers.."
teacher1 = Teacher.create(name: "Miss Ashley", bio: "Hip hop and ballet master!", image_url:"https://static.wixstatic.com/media/4cdb4c_f4e5c6ad4c124cccb37d390a35c45332~mv2.jpg/v1/crop/x_178,y_0,w_886,h_1535/fill/w_122,h_208,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_1417.jpg")
teacher2 = Teacher.create(name: "Miss Amanda", bio: "Loves all kinds of dance!", image_url: "https://static.wixstatic.com/media/4cdb4c_aaa7666c4e6e4f499ccbb9ed2609d770~mv2.jpg/v1/fill/w_116,h_201,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4cdb4c_aaa7666c4e6e4f499ccbb9ed2609d770~mv2.jpg")
teacher3 = Teacher.create(name: "Mister Joe", bio: "Fun and passionate teacher, full of life.", image_url:"https://static.wixstatic.com/media/4cdb4c_663b1cea3fa3423bbb06d17c2c794cad~mv2.jpg/v1/fill/w_181,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4cdb4c_663b1cea3fa3423bbb06d17c2c794cad~mv2.jpg")
teacher4 = Teacher.create(name: "Miss Kristi", bio: "Studied ballet professionally for ten years.", image_url:"https://static.wixstatic.com/media/4cdb4c_bfd4b5d360c94e3f82e504aa2b449ace~mv2.jpg/v1/fill/w_180,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC_8883.jpg")
teacher5 = Teacher.create(name: "Miss Lydia", bio: "Loves all things lyrical!", image_url:"https://static.wixstatic.com/media/4cdb4c_c64baf890812446c9e9f77576a78166c~mv2.jpg/v1/fill/w_179,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4cdb4c_c64baf890812446c9e9f77576a78166c~mv2.jpg")
teacher6 = Teacher.create(name: "Mister Mike", bio: "Our resident performing arts expert!", image_url:"")

puts "Seeding classes.."
class1 = DanceClass.create(name: "Beginner Ballet", style: "Ballet", description: "Ballet for beginners! All welcome!", time: "Monday 5:00pm", teacher_id: teacher1.id)
class2 = DanceClass.create(name: "Beginner Lyrical", style: "Lyrical", description: "Lyrical for beginners! All welcome!", time: "Monday 7:00pm", teacher_id: teacher2.id)
class3 = DanceClass.create(name: "Beginner Hip Hop", style: "Hip Hop", description: "Hip Hop for beginners! All welcome!", time: "Tuesday 5:00pm", teacher_id: teacher3.id)
class4 = DanceClass.create(name: "Intermediate Ballet", style: "Ballet", description: "Intermediate Ballet for students who have already mastered the basics and are looking to go further!", time: "Tuesday 7:00pm", teacher_id: teacher4.id)
class5 = DanceClass.create(name: "Intermediate Lyrical", style: "Lyrical", description: "Intermediate Lyrical for students who have already mastered the basics and are looking to go further!", time: "Wednesday 5:00pm", teacher_id: teacher5.id)
class6 = DanceClass.create(name: "Intermediate Hip Hop", style: "Hip Hop", description: "Intermediate Hip Hop for students who have already mastered the basics and are looking to go further!", time: "Wednesday 7:00pm", teacher_id: teacher6.id)
class7 = DanceClass.create(name: "Advanced Ballet", style: "Ballet", description: "Advanced Ballet, for experienced ballerinas only!", time: "Thursday 5:00pm", teacher_id: teacher1.id)
class8 = DanceClass.create(name: "Advanced Lyrical", style: "Lyrical", description: "Advanced Lyrical, for experienced dancers only!", time: "Thursday 7:00pm", teacher_id: teacher2.id)
class9 = DanceClass.create(name: "Advanced Hip Hop", style: "Hip Hop", description: "Advanced Hip Hop, for experienced dancers only!", time: "Friday 5:00pm", teacher_id: teacher3.id)
class10 = DanceClass.create(name: "Competition I", style: "Ballet", description: "Competative Ballet, students must try out and be selected for competition teams.", time: "Friday 7:00pm", teacher_id: teacher4.id)
class11 = DanceClass.create(name: "Competition II", style: "Ballet", description: "Competative Ballet, students must try out and be selected for competition teams.", time: "Saturday 12:00pm", teacher_id: teacher5.id)

puts "Seeding registrations.."
Registration.create(user_id: user1.id, dance_class_id: class1.id)
Registration.create(user_id: user2.id, dance_class_id: class2.id)
Registration.create(user_id: user3.id, dance_class_id: class3.id)
Registration.create(user_id: user4.id, dance_class_id: class4.id)
Registration.create(user_id: user5.id, dance_class_id: class5.id)
Registration.create(user_id: user6.id, dance_class_id: class6.id)
Registration.create(user_id: user7.id, dance_class_id: class7.id)
Registration.create(user_id: user8.id, dance_class_id: class8.id)
Registration.create(user_id: user9.id, dance_class_id: class9.id)
Registration.create(user_id: user1.id, dance_class_id: class10.id)
Registration.create(user_id: user5.id, dance_class_id: class11.id)

puts "Seeding reviews..."

Review.create(user_id: user1.id, teacher_id: teacher1.id, content: "The best teacher ever!", rating: 5)
Review.create(user_id: user2.id, teacher_id: teacher1.id, content: "The best teacher ever!", rating: 5)
Review.create(user_id: user2.id, teacher_id: teacher2.id, content: "The best teacher ever!", rating: 5)
Review.create(user_id: user3.id, teacher_id: teacher2.id, content: "The best teacher ever!", rating: 5)
Review.create(user_id: user7.id, teacher_id: teacher3.id, content: "The best teacher ever!", rating: 5)
Review.create(user_id: user8.id, teacher_id: teacher3.id, content: "The best teacher ever!", rating: 5)
Review.create(user_id: user8.id, teacher_id: teacher4.id, content: "The best teacher ever!", rating: 5)
Review.create(user_id: user1.id, teacher_id: teacher4.id, content: "The best teacher ever!", rating: 5)
Review.create(user_id: user2.id, teacher_id: teacher5.id, content: "The best teacher ever!", rating: 5)
Review.create(user_id: user5.id, teacher_id: teacher5.id, content: "The best teacher ever!", rating: 5)
Review.create(user_id: user3.id, teacher_id: teacher6.id, content: "The best teacher ever!", rating: 5)
Review.create(user_id: user7.id, teacher_id: teacher6.id, content: "The best teacher ever!", rating: 5)
Review.create(user_id: user8.id, teacher_id: teacher1.id, content: "The best teacher ever!", rating: 5)
Review.create(user_id: user8.id, teacher_id: teacher2.id, content: "The best teacher ever!", rating: 5)