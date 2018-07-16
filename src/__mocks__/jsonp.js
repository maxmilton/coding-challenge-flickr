// XXX: Fetching data over the network is a bad idea for unit test because networks
// can be unreliable. This mock makes the jsonp function data reproducible.

/* global jest */

const response = {
  title: 'Recent Uploads tagged akihabara',
  link: 'https://www.flickr.com/photos/tags/akihabara/',
  description: '',
  modified: '2018-07-15T17:57:32Z',
  generator: 'https://www.flickr.com',
  items: [
    {
      title: 'Japan- Tokyo- Akihabara',
      link: 'https://www.flickr.com/photos/117671697@N03/42523418095/',
      media: {
        m: 'https://farm2.staticflickr.com/1763/42523418095_1dce215e24_m.jpg',
      },
      date_taken: '2017-12-07T04:04:28-08:00',
      description:
        ' <p><a href="https://www.flickr.com/people/117671697@N03/">venturidonatella</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/117671697@N03/42523418095/" title="Japan- Tokyo- Akihabara"><img src="https://farm2.staticflickr.com/1763/42523418095_1dce215e24_m.jpg" width="240" height="160" alt="Japan- Tokyo- Akihabara" /></a></p> ',
      published: '2018-07-15T17:57:32Z',
      author: 'nobody@flickr.com ("venturidonatella")',
      author_id: '117671697@N03',
      tags:
        'tokyo japan giappone asia akihabara street strade streetlife streetscene persone people gentes portrait ritratto auto car automobile grattaceli colori colors nikon nikond500 d500 fumetti manga ritratti portraits',
    },
    {
      title: 'From Hijiri-bashi bridge',
      link: 'https://www.flickr.com/photos/pelican/43415352081/',
      media: {
        m: 'https://farm1.staticflickr.com/846/43415352081_266a75130f_m.jpg',
      },
      date_taken: '2018-07-11T16:05:57-08:00',
      description:
        ' <p><a href="https://www.flickr.com/people/pelican/">pelican</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/pelican/43415352081/" title="From Hijiri-bashi bridge"><img src="https://farm1.staticflickr.com/846/43415352081_266a75130f_m.jpg" width="240" height="160" alt="From Hijiri-bashi bridge" /></a></p> <p>Akihabara</p>',
      published: '2018-07-15T04:00:45Z',
      author: 'nobody@flickr.com ("pelican")',
      author_id: '85936780@N00',
      tags: 'dscrx100 tokyo hijiribashi akihabara',
    },
    {
      title: 'Sonic the Hedgehog',
      link: 'https://www.flickr.com/photos/amcuk/28490047117/',
      media: {
        m: 'https://farm1.staticflickr.com/914/28490047117_4ab61e368d_m.jpg',
      },
      date_taken: '2018-04-10T16:19:06-08:00',
      description:
        ' <p><a href="https://www.flickr.com/people/amcuk/">AMcUK</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/amcuk/28490047117/" title="Sonic the Hedgehog"><img src="https://farm1.staticflickr.com/914/28490047117_4ab61e368d_m.jpg" width="240" height="180" alt="Sonic the Hedgehog" /></a></p> <p>Taken with <br /> Olympus OM-D E-M10 Mkii<br /> OLYMPUS M.14-42mm F3.5-5.6 EZ<br /> <br /> OLYMPUS DIGITAL CAMERA</p>',
      published: '2018-07-12T09:54:47Z',
      author: 'nobody@flickr.com ("AMcUK")',
      author_id: '35992490@N03',
      tags:
        'chiyodaku tōkyōto japan jp em10 omdem10 omdem10mkii em10mkii omd olympus olympusuk m43 micro43rds micro43 microfourthirds nippon tokyo akihabara sonic hedgehog sega sonicthehedgehog',
    },
    {
      title: 'Cheese Hedgehog Cafe',
      link: 'https://www.flickr.com/photos/amcuk/41550051470/',
      media: {
        m: 'https://farm2.staticflickr.com/1765/41550051470_39862d1bbf_m.jpg',
      },
      date_taken: '2018-04-10T15:38:31-08:00',
      description:
        ' <p><a href="https://www.flickr.com/people/amcuk/">AMcUK</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/amcuk/41550051470/" title="Cheese Hedgehog Cafe"><img src="https://farm2.staticflickr.com/1765/41550051470_39862d1bbf_m.jpg" width="240" height="180" alt="Cheese Hedgehog Cafe" /></a></p> <p>Taken with <br /> Olympus OM-D E-M10 Mkii<br /> Panasonic f1.7 25mm<br /> LUMIX G 25/F1.7<br /> <br /> OLYMPUS DIGITAL CAMERA</p>',
      published: '2018-07-12T09:54:42Z',
      author: 'nobody@flickr.com ("AMcUK")',
      author_id: '35992490@N03',
      tags:
        'chiyodaku tōkyōto japan jp em10 omdem10 omdem10mkii em10mkii omd olympus olympusuk m43 micro43rds micro43 microfourthirds nippon tokyo akihabara hedgehog',
    },
    {
      title: 'Akihabara sunset',
      link: 'https://www.flickr.com/photos/amcuk/28490042907/',
      media: {
        m: 'https://farm1.staticflickr.com/927/28490042907_f8b87d4465_m.jpg',
      },
      date_taken: '2018-04-10T17:52:17-08:00',
      description:
        ' <p><a href="https://www.flickr.com/people/amcuk/">AMcUK</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/amcuk/28490042907/" title="Akihabara sunset"><img src="https://farm1.staticflickr.com/927/28490042907_f8b87d4465_m.jpg" width="240" height="180" alt="Akihabara sunset" /></a></p> <p>Taken with <br /> Olympus OM-D E-M10 Mkii<br /> OLYMPUS M.14-42mm F3.5-5.6 EZ<br /> <br /> OLYMPUS DIGITAL CAMERA</p>',
      published: '2018-07-12T09:54:50Z',
      author: 'nobody@flickr.com ("AMcUK")',
      author_id: '35992490@N03',
      tags:
        'chiyodaku tōkyōto japan jp em10 omdem10 omdem10mkii em10mkii omd olympus olympusuk m43 micro43rds micro43 microfourthirds nippon tokyo akihabara sunset urban streetscene street',
    },
  ],
};

module.exports = jest.fn((url, opts, cb) => cb(null, response));
