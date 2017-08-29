var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/Ganesha', function (req,res) {
res.send(`Lord Ganesha is considered the god of wealth, prosperity and good fortune.
The festival is heavily celebrated in Andhra Pradesh, Goa, Gujarat, Madhya Pradesh, Maharashtra, Telangana, Orissa, Pondicherry, Tamil Nadu, Karnataka, Rajasthan, Chhattisgarh.
Maharashtra is the state known for grand celebrations during this festival.
Although Ganesh Chaturthi is widely celebrated it is not a public holiday, because there are so many religions in India they had to abolish all public holidays and have only three: Independence Day (15 August), Republic Day (26 January) and Gandhi’s birthday (2 October).

The festival is marked by the installation of Ganesha idols in homes and in public places.The festival begins on Shukla Chaturthi which is the fourth day of Bhadrapada and ends on the 14th day, known as Anant Chaturdashi. On the last day idols of Ganesha are immersed in a river.
The festival is also called Vinayka Chaturthi, and during the festival colourful pandals (temporary shrines) are setup to worship Ganesha.
There are four main rituals observed during Ganesh Chaturthi:
Pranapratishhtha – the process of infusing the deity into an idol,
Shhodashopachara – 16 forms of paying tribute to Ganesha,
Uttarpuja– Puja after which the idol could be shifted after its infusion,
Ganpati Visarjan – immersion of the Idol in the river.


Modak is prepared and eaten during the festival, it is a sweet dish prepared using rice or flour stuffed with grated jaggery, coconut and dry fruits.
The festival used to be celebrated as a private event but is now celebrated as a public event in order to bring Brahmins and non-Brahmins together and build unity between them.
It is celebrated as a public event and has been since the time of Maratha King Shivaji, but a public Ganesh idol was installed by Bhausabheb Laxman Javale.
The Lord Ganesha is also worshiped in Thailand, Cambodia, Indonesia, Afghanistan,Nepal and China.
There are two different stories about the birth of Ganesha, one story says that Goddess Parvati, Ganesha’s mother, created Ganesha out of the dirt from her body while having a bath, and she made him guard the door while she finished bathing.
However, Shiva who had gone out, returned home and Ganesha didn’t know who he was so he stopped him from entering.
In a combat between the two, Shiva severed Ganesha’s head.
Parvati was enraged and Shiva promised that Ganesha would live again.
The only north-facing head of a dead person that could be found was the head of an elephant, and Shiva fixed the head on to Ganesha’s body and brought him back to life.
The other story is that Ganesha was created by Shiva and Parvati on request of the Devas to have an obstacles creator in the path of demonic beings and Vighnaharta the obstacle averter, or remover of obstacles, to help the Devas. `);


});



app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
