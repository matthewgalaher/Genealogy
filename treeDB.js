/*
Columns from left to right are generation 1, generation 2, etc.
Each column is populated by a family record which lists parents and children.
Record numbers are arbitrarily assigned, but a record can only go in it's proper column
Record naming convention is: column/generation number + record number (e.g. gen1rec6)
*/
var treeDB = {

/*
template:

genxrecx : {
    person : {
        name : 'xxx',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen0rec0',
        father : 'gen0rec0',
        about : ''
    },
    spouses : [ {
        name : 'xxx',
        recordID : 'genxrecx'
    },
    ],
        children : [ {
            name : 'xxx',
            recordID : 'genxrecx'
        },
        {
            name : 'xxx',
            recordID : 'genxrecx'
        },
    ],
},

*/

/* this record points to itself (i.e. it's mother farther id is itself) and is shared by all other records that don't have one or both parents defined */
/* this is used to end a branch of a family tree */
gen0rec0 : {
    person : {
        name : 'xxx',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen0rec0',
        father : 'gen0rec0',
        about : ''
    },
    spouses :  [{},],
    children : [{},],
},

gen3rec4 : {
           person : {
                name : 'Percy Lee Menefee',
                born_date : 'Dec 29, 1897',
                born_location : 'Houston Texas',
                married_date : '',
                married_location : '',
                died_date : 'July 4,1955',
                died_location : 'McMinnville, OR',
                mother : 'gen0rec0',
                father : 'gen2rec5',
                about : ''
            },
        spouses : [
            {
                name : 'Cornelia Cooke',
                recordID : 'gen3rec10',
            },
            {
                name : 'Ruth Ghiradelli',
                recordID : 'gen3rec11',
            },
        ],
        children : [
//             {
//                 name : 'of P.L. &amp; Cornelia',
//                 recordID : 'gen0rec0'
//             },
            {
                name : 'Lee Bruce Menefee',
                recordID : 'gen4rec3'
            },
            {
                name : 'Towner Miller Menefee',
                recordID : 'gen4rec4'
            },
            {
                name : 'Cornelia Menefee',
                recordID : 'gen4rec1'
            },
//             {
//                 name : 'of P.L. &amp; Ruth',
//                 recordID : 'gen0rec0'
//             },
            {
                name : 'Margery',
                recordID : 'gen4rec6'
            },
        ],
    },
gen3rec10 : {
           person : {
                name : 'Cornelia Cooke',
                born_date : 'November 16, 1889',
                born_location : 'Portland OR',
                married_date : '',
                married_location : '',
                died_date : 'April 13, 1983',
                died_location : 'Portland OR',
                mother : 'gen2rec13',
                father : 'gen2rec3',
                about : ''
            },
        spouses : [
            {
                name : 'Percy Lee Menefee',
                recordID : 'gen3rec4',
            },
        ],
        children : [
            {
                name : 'Lee Bruce Menefee',
                recordID : 'gen4rec3'
            },
            {
                name : 'Towner Miller Menefee',
                recordID : 'gen4rec4'
            },
            {
                name : 'Cornelia Menefee',
                recordID : 'gen4rec1'
            },
        ],
    },  
gen3rec11 : {
           person : {
       name : 'Ruth Ghiradelli',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
            },
        spouses : [
            {
                name : 'Percy Lee Menefee',
                born_date : 'Dec 29, 1897',
                born_location : 'Houston Texas',
                married_date : '',
                married_location : '',
                died_date : 'July 4,1955',
                died_location : 'McMinnville, OR',
                parents : 'gen2rec5',
                recordID : 'gen3rec4',
                about : ''
            },
            {
            },
        ],
        children : [
            {
                name : 'Margery',
                recordID : 'gen4rec6'
            },
        ],
    },    
gen4rec4 : {
        person : {
                name : 'Towner Miller Menefee',
                born_date : 'March 9, 1926',
                born_location : 'Portland OR',
                married_date : '',
                married_location : '',
                died_date : '2013',
                died_location : '',
                mother : 'gen3rec10',
                father : 'gen3rec4',
                about : ''
            },
        spouses : [
            {
                name : 'Libby Cronnin',     
                recordID : 'gen4rec12'
            },
            {
                name : 'Nancy James Zeppa',     
                recordID : 'gen4rec13'
            },
        ],
        children : [
            {
                name : 'Sally Menefee',
                recordID : 'gen5rec7'
            },
            {
                name : 'Cornelia Menefee',
                recordID : 'gen5rec8'
            },
            {
                name : 'Caroline Menefee',
                recordID : 'gen5rec9'
            },
            {
                name : 'Betsy Menefee',
                recordID : 'gen5rec10'
            },
            {
                name : 'John Menefee',
                recordID : 'gen5rec11'
            },
            {
                name : 'John Brian Menefee (died at two months)',
                recordID : 'gen5rec12'
            },
            {
                name : 'Christine Menefee',
                recordID : 'gen5rec13'
            },
            {
                name : 'Peter Menefee',
                recordID : 'gen5rec14'
            },
        ],
    },
gen4rec12 : {
        person : {
                name : 'Libby Cronnin',     
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
            },
        spouses : [
            {
         name : 'Towner Miller Menefee',
                recordID : 'gen4rec4',            
            },
            {
                name : 'Thomas B. Malarkey Jr.(?)',
                recordID : 'gen0rec0',
            },
            {
                name : 'Bob Noyes',     
                recordID : 'gen0rec0',
            },
        ],
        children : [
            {
                name : 'Sally Menefee',
                recordID : 'gen5rec7'
            },
            {
                name : 'Cornelia Menefee',
                recordID : 'gen5rec8'
            },
            {
                name : 'Caroline Menefee',
                recordID : 'gen5rec9'
            },
            {
                name : 'Betsy Menefee',
                recordID : 'gen5rec10'
            },
            {
                name : 'John Menefee',
                recordID : 'gen5rec11'
            },
            {
                name : 'John Brian Menefee (died at two months)',
                recordID : 'gen5rec12'
            },
            {
                name : 'Christine Menefee',
                recordID : 'gen5rec13'
            },
            {
                name : 'Peter Menefee',
                recordID : 'gen5rec14'
            },
        ],
    },

gen5rec12 : {
    person : {
        name : 'John Brian Menefee (died at two months)',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen4rec12',
        father : 'gen4rec4',
        about : ''
    },
    spouses : [ {
    },
    ],
        children : [ {
        },
    ],
},

gen4rec13 : {
        person : {
                name : 'Nancy James Zeppa',     
                born_date : '1931',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
            },
        spouses : [
            {
         name : 'Towner Miller Menefee',
                recordID : 'gen4rec4',            
            },
            {
                name : '(?)',     
                recordID : 'gen0rec0',
            },
        ],
        children : [
            {

            },
        ],
    },
gen4rec3 : {
        person : {
            name : 'Lee Bruce Menefee',
            born_date : 'Aug 25, 1924',
            born_location : 'Portland OR',
            married_date : '',
            married_location : '',
            died_date : 'Dec 15, 1996',
            died_location : 'Berkeley Ca.',
                mother : 'gen3rec10',
                father : 'gen3rec4',
            about : ''
        },
    spouses : [
        {
            name : 'Phyllis',
            recordID : 'gen4rec19'
        },
    ],
    children : [
        {
            name : 'Wendy Menefee',
            recordID : 'gen5rec15'
        },
        {
            name : 'Jennifer Menefee',
            recordID : 'gen5rec16'
        },
        {
            name : ' Christopher Menefee',
            recordID : 'gen5rec17'
                },
    ],
},

gen4rec19 : {
    person : {
        name : 'Phyllis',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
        about : ''
    },
    spouses : [ {
        name : 'Lee Bruce Menefee',
        recordID : 'gen4rec3'
    },
    ],
        children : [ {
            name : 'Wendy Menefee',
            recordID : 'gen5rec15'
        },
        {
            name : 'Jennifer Menefee',
            recordID : 'gen5rec16'
        },
        {
            name : ' Christopher Menefee',
            recordID : 'gen5rec17'
        },
    ],
},

gen1rec1 : {
        person : {
                name : 'John Adams',
                born_date : 'feb 26 1803',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : 'feb 10 1875',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
            },
        spouses:[{},],
        children : [
            {
                name : 'Edward Adams',
                recordID : 'gen2rec1'
            },
        ],
    },

gen2rec4 : {
        person :     {
                name : 'Charles Galaher',
                born_date : '1854',
                born_location : 'Liverpool',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen2rec7',
                father : 'gen1rec5',
                about : ''
            },
        spouses : [
            {
                name : 'Mary Whitelaw',
                recordID : 'gen2rec7'
            },
        ],
        children : [
            {
                name : 'Francis Galaher',
                recordID : 'gen3rec7'
            },
            {
                name : 'Robert Galaher',
                recordID : 'gen0rec0'
            },
        ],
    },
gen2rec7 : {
        person :     {
                name : 'Mary Whitelaw',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen1rec11',
                about : ''        
            },
        spouses : [
            {
                name : 'Charles Galaher',
                recordID : 'gen2rec4'
            },
        ],
        children : [
            {
                name : 'Francis Galaher',
                recordID : 'gen3rec7'
            },
            {
                name : 'Robert Galaher',
                recordID : 'gen0rec0'
            },
        ],
    },
gen2rec9 : {
        person : {
                name : 'David Galaher',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0', 
                about : ''
            },
        spouses : [
            {
            }
        ],
        children:[{},],
    },
gen2rec10 : {
        person : {
                name : 'Donald Galaher',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0', 
                about : ''
            },
        spouses : [
            {
            }
        ],
        children:[{},],
    },
gen2rec11 : {
        person : {
                name : 'Alexander \'Sandy\' Galaher',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0', 
                about : ''
            },
        spouses : [
            {
            }
        ],
        children:[{},],
    },
gen1rec2 : {
        person : {
                name : 'Horatio Cooke',
                born_date : '1799',
                born_location : 'Worcestershire England',
                married_date : '',
                married_location : '',
                died_date : '1869',
                died_location : 'Portland, OR.',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
            },
        spouses : [
            {
                name : 'Anna Bennett',
                recordID : 'gen1rec16',
            }
        ],
        children : [
            {
                name : 'James W. Cook',
                recordID : 'gen2rec3'
            },
            {
                name : 'Vincent Cook',
                recordID : 'gen2rec12'
            },
        ],
    },

gen1rec16 : {
    person : { 
        name: 'Anna Bennett',
        born_date : '1795',
        born_location : 'London, England',
        married_date : '1821',
        married_location : 'New York',
        died_date : 'Jan 4, 1880',
        died_location : 'Portland, OR.',
        mother : 'gen0rec0',
        father : 'gen0rec0',
        about : ''
    },
    spouses : [ {
        name : 'Horatio Cooke',
        recordID : 'gen1rec2'
    },
    ],
        children : [ {
            name : 'James W. Cook',
            recordID : 'gen2rec3'
        },
        {
            name : 'Vincent Cook',
            recordID : 'gen2rec12'
        },
    ],
},

gen2rec12 : {
    person : {
        name : 'Vincent Cook',
        born_date : '1841',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '1922',
        died_location : '',
        mother : 'gen1rec16',
        father : 'gen1rec2',
        about : ''
    },
    spouses : [ {
    },
    ],
        children : [ {
        },
        {

        },
    ],
},

gen1rec5 : {
        person : {
                name : 'Francis Galaher',
                born_date : 'early 1800\'s',
                born_location : 'Glasgow area',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0', 
                about : ''
            },
        spouses : [
            {
                name : 'Brisbane',
                recordID : 'gen1rec9'
            }
        ],
        children : [
            {
                name : 'Charles Galaher',
                recordID : 'gen2rec4'
            },
            {
                name : 'David Galaher',
                recordID : 'gen0rec0'
            },
            {
                name : 'Donald Galaher',
                recordID : 'gen0rec0'
            },
            {
                name : 'Alexander \'Sandy\' Galaher',
                recordID : 'gen0rec0'
            }
        ],
    },
    gen1rec9 : {
        person : {
                name : 'Brisbane',
                born_date : '',
                born_location : 'Highlands of Scotland',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
            },
        spouses : [
            {
                name : 'Francis Galaher',
                recordID : 'gen1rec5'
            }
        ],
        children : [
            {
                name : 'Charles Galaher',
                recordID : 'gen2rec4'
            },
            {
                name : 'David Galaher',
                recordID : 'gen0rec0'
            },
            {
                name : 'Donald Galaher',
                recordID : 'gen0rec0'
            },
            {
                name : 'Alexander \'Sandy\' Galaher',
                recordID : 'gen0rec0'
            }
        ],
    },
gen1rec4 : {
            person: {
                name : 'John Fergueson Miller',
                born_date : 'April 301, 1825',
                born_location : 'Elizabethtown, KY.',
                married_date : '',
                married_location : '',
                died_date : 'Feb 20, 1901',
                died_location : 'Salem OR.',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : 'http://homepage.mac.comh/galaher/heritage/etc.html'
            },
        spouses : [
            {
                name : 'Zarilda Jackson',
                born_date : 'Mar 8, 1828',
                born_location : 'Randolph Co. Missouri',
                married_date : 'Mar 25, 1849',
                married_location : 'Randolph Co. Missouri',
                died_date : 'Oct. 23, 1913',
                died_location : 'Salem OR.',
                about : 'http://homepage.mac.comh/galaher/heritage/etc.html'
            },
        ],
        children : [
            {
                name : 'Iantha (Cully) Miller',
                recordID : 'gen2rec3'
            },
        ],
    },
gen1rec8 : {
        person :             {
                name : 'Hiram Menefee',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
            },
        spouses : [
            {
                name : 'Elizabeth Towner',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                about : ''
            },
        ],
        children : [
            {
                name : 'Lee Bruce Menefee',
                recordID : 'gen2rec5'
            },
        ],
    },
gen1rec3 : {
        person : {
                name : 'Crumpacker',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
            },
        spouses : [
            {
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                about : ''
            },
        ],
        children : [
            {
                name : 'Edgar Dean Crumpacker',
                recordID : 'gen2rec6'
            },
        ],
    },
gen1rec11 : {
        person : {
                name : 'Whitelaw. Blacksmith in Glasgow',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
        },
    spouses : [
            {
                name : '',     
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                about : ''
            },
        ],
        children : [
            {
                name : 'Mary Whitelaw',
                recordID : 'gen2rec4'
            },
        ],
    },
gen2rec3 : {
        person : {
                name : 'James W. Cook',
                born_date : 'Aug 22, 1833',
                born_location : 'Newark, NJ',
                married_date : '',
                married_location : '',
                died_date : 'Oct 29, 1913',
                died_location : 'Portland OR',
                mother : 'gen1rec16',
                father : 'gen1rec2',
                about : 'http://homepage.mac.com/galaher/'
        },
    spouses : [
            {
                name : 'Iantha (Cully) Miller',
                recordID : 'gen2rec13'
            },
        ],
        children : [
            {
                name : 'Cornelia Cooke',
                recordID : 'gen3rec10'
            },
            {
                name : 'Cully Anna Cooke',
                recordID : 'gen3rec13'
            },
            {
                name : 'Dorothy Cooke (Died at birth)',
                recordID : 'gen3rec14'
            },
        ],
    },
    
gen3rec14 : {
    person : {
        name : 'Dorothy Cooke (Died at birth)',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen2rec13',
        father : 'gen2rec3',
        about : ''
    },
    spouses : [ {
    },
    ],
        children : [ {
        },
    ],
},

gen2rec13 : {
    person : {
                name : 'Iantha (Cully) Miller',
                born_date : 'Oct 29, 1852',
                born_location : 'Jacksonville OR',
                married_date : ' Jan 4, 1888',
                married_location : 'Salem OR',
                died_date : 'May 29, 1932',
                died_location : 'Portland OR',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                parents : 'gen1rec4',
                about : ''
    },
    spouses : [ {
        name : 'James W. Cook',
        recordID : 'gen2rec3'
    },
    ],
        children : [ 
                    {
                name : 'Cornelia Cooke',
                recordID : 'gen3rec10'
            },
            {
                name : 'Cully Anna Cooke',
                recordID : 'gen3rec13'
            },
            {
                name : 'Dorothy Cooke (Died at birth)',
                recordID : 'gen3rec14'
            },
    ],
},

gen2rec5 : {
        person : {
                name : 'Lee Bruce Menefee',
                born_date : 'early 1800\'s',
                born_location : '',        
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                parents : 'gen1rec8',
                about : ''
        },
    spouses:[{},],
        children : [
            {
                name : 'Percy Lee Menefee',
                recordID : 'gen3rec4'
            },
            {
            // there were many simblings.
            },
        ],
    },
gen2rec6 : {
        person : {
                name : 'Edgar Dean Crumpacker',
                born_date : 'May 27, 1851',
                born_location : 'Westville, La Porte County, Ind.',
                married_date : '',
                married_location : '',
                died_date : 'May 19, 1920',
                died_location : 'Valparaiso, Porter County, Ind.',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                parents : 'gen1rec3',
                about : 'http://homepage.mac.com/galaher/heritage/mcrumpacker_house.html#edgardean1851'
        },
    spouses:[{},],
        children : [
            {
                name : 'Maurice E. Crumpacker',
                recordID : 'gen3rec6'
            },
        ],
    },
gen2rec1 : {
        person : {
                name : 'Edward Adams',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen1rec1',
                about : ''
        },
    spouses:[{},],
        children : [
            {
                name : 'Charlotte Stevens Adams',
                recordID : 'gen3rec16'
            },
            {
                name : 'George Adams',
                recordID : 'gen3rec15'
            },
        ],
    },

gen3rec15 : {
    person : {
        name : 'George Adams',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
        about : ''
    },
    spouses : [ {

    },
    ],
        children : [ {
        },
    ],
},

gen3rec7 : {
        person : {
                name : 'Francis Galaher',
                born_date : '1877',
                born_location : 'Glasgow Scotland',
                married_date : '',
                married_location : '',
                died_date : '19',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen2rec4',
                about : ''
        },
    spouses : [
            {
                name : 'Charlotte Stevens Adams',
                recordID : 'gen3rec16'
            },
        ],
        children : [
            {
                name : 'Robert Brisbane Galaher',
                recordID : 'gen4rec18'
            },
            {
                name : 'Agnes Galaher(Stillborn)',
                recordID : 'gen4rec20'
            },
            {
                name : 'Abbott Galaher',
                recordID : 'gen4rec2'
            },
            {
                name : 'Edward Galaher',
                recordID : 'gen4rec21'
            },
            {
                name : 'Mary Galaher',
                recordID : 'gen4rec22'
            },
        ],
    },
    
gen3rec16 : {
    person : {
        name : 'Charlotte Stevens Adams',
        born_date : '1884',
        born_location : 'Arlington Massachusetts',
        married_date : ' 1906',
        married_location : '',
        died_date : '19',
        died_location : '',
        mother : 'gen0rec0',
        father : 'gen2rec1',
        about : '',    
        },
    spouses : [ {
        name : 'Francis Galaher',
        recordID : 'gen3rec7'
    },
    ],
        children : [ 
        
                    {
                name : 'Robert Brisbane Galaher',
                recordID : 'gen4rec18'
            },
            {
                name : 'Agnes Galaher(Stillborn)',
                recordID : 'gen4rec20'
            },
            {
                name : 'Abbott Galaher',
                recordID : 'gen4rec2'
            },
            {
                name : 'Edward Galaher',
                recordID : 'gen4rec21'
            },
            {
                name : 'Mary Galaher',
                recordID : 'gen4rec22'
            },

    ],
},

gen4rec20 : {
    person : {
        name : 'Agnes Galaher(Stillborn)',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen3rec16',
        father : 'gen3rec7',
        about : ''
    },
    spouses : [ {
    },
    ],
        children : [ {
        },
    ],
},

gen4rec21 : {
    person : {
        name : 'Edward Galaher',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen3rec16',
        father : 'gen3rec7',
        about : ''
    },
    spouses : [ {
    },
    ],
        children : [ {
        },
    ],
},

gen4rec22 : {
    person : {
        name : 'Mary Galaher',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen3rec16',
        father : 'gen3rec7',
        about : ''
    },
    spouses : [ {
    },
    ],
        children : [ 
        {

        },
    ],
},

gen3rec6 : {
        person : {
                name : 'Maurice E. Crumpacker',
                born_date : 'Dec 19, 1887',
                born_location : 'Valpariso Ind.',
                married_date : '',
                married_location : '',
                died_date : 'July 25, 1927',
                died_location : 'San Fransico Ca.',
                mother : 'gen0rec0',
                father : 'gen2rec6',
                about : ''
        },
    spouses : [
            {
                name : 'Cully Anna Cooke',
                recordID : 'gen3rec13'
            },
        ],
        children : [
            {
                name : 'Peter Crumpacker',
                recordID : 'gen4rec14'
            },
            {
                name : 'Edgar Dean Crumpacker',
                recordID : 'gen4rec7'
            },
            {
                name : 'James Cooke Crumpacker',
                recordID : 'gen4rec15'
            },
        ],
    },
gen3rec13 : {
        person : {
                name : 'Cully Anna Cooke',
                born_date : 'April 22, 1891',
                born_location : 'Portland OR',
                married_date : '',
                married_location : '',
                died_date : 'Jan 19, 1968',
                died_location : 'Honolulu HI.',
                mother : 'gen2rec13',
                father : 'gen2rec3',
                about : ''
        },
    spouses : [
            {
       name : 'Maurice E. Crumpacker',
                recordID : 'gen3rec6'
            },
            {
        name : 'Remarried. Need to look up',
        recordID : 'gen0rec0'
            },
        ],
        children : [
            {
                name : 'Peter Crumpacker',
                recordID : 'gen4rec14'
            },
            {
                name : 'Edgar Dean Crumpacker',
                recordID : 'gen4rec7'
            },
            {
                name : 'James Cooke Crumpacker',
                recordID : 'gen4rec15'
            },
        ],
    },
gen3rec8 : {
        person : {
                name : 'Nita Craig',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
        },
    spouses : [
            {
                name : 'Ed Craig',
                recordID : 'gen0rec0'
            },
            {
                name : 'Mr. Foy',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',        
                died_location : '',
                about : ''
            },
        ],
        children : [
            {
                name : 'of Nita &amp; Mr. Foy',
                recordID : 'gen0rec0'
            },
            {
                name : 'Bob Foy',
                recordID : 'gen4rec16'
            },
        ],
    },
gen3rec9 : {
        person : {
                name : 'Thom Neikirk',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',        
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
        },
    spouses : [
            {
                name : 'Janet Neikirk',
                recordID : 'gen3rec17'
            },
        ],
        children : [
            {
                name : 'Sally Neikirk',
                recordID : 'gen4rec9'
            },
            {
                name : 'Julie Neikirk',
                recordID : 'gen4rec10'
            },
            {
                name : 'Bill Neikirk',
                recordID : 'gen4rec11'
            },
        ],
    },

gen3rec17 : {
        person : {
                name : 'Janet Neikirk',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',        
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
        },
    spouses : [
            {
                name : 'Thom Neikirk',
                recordID : 'gen3rec9'
            },
        ],
        children : [
            {
                name : 'Sally Neikirk',
                recordID : 'gen4rec9'
            },
            {
                name : 'Julie Neikirk',
                recordID : 'gen4rec10'
            },
            {
                name : 'Bill Neikirk',
                recordID : 'gen4rec11'
            },
        ],
    },

gen1rec15 : {
        person : {
                name : 'Cronnin',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
        },
    spouses:[{},],
        children : [
            {
                name : 'Libby Cronnin',
                recordID : 'gen4rec12'
            },
            {
                name : 'Dorothy (Dotti) Cronnin',
                recordID : 'gen6rec'
            },
            {
                name : 'Sally Cronnin',
                recordID : 'gen6rec'
            },
        ],
    },
gen4rec1 : {
        person : {
                name : 'Cornelia Miller Menefee',
                born_date : 'March 9, 1926',
                born_location : 'Portland OR',
                married_date : 'Dec 29, 1951',
                married_location : '',
                died_date : '1994',
                died_location : 'Kailua HI.',
                mother : 'gen3rec10',
                father : 'gen3rec4',
                about : ''
        },
    spouses : [
            {
                name : 'Robert Brisebane Galaher',
                recordID : 'gen4rec18'
            },
                        {
                name : 'Thomas T. Taylor',
                recordID : 'gen4rec23'
            },
                        {
                name : 'Edgar Dean Crumpacker',
                recordID : 'gen4rec7'
            },
        ],
        children : [
            {
                name : 'Abbott Stevens Galaher',
                recordID : 'gen5rec1'
            },
            {
                name : 'Towner Whitelaw Galaher',
                recordID : 'gen5rec2'
            },
            {
                name : 'Nathaniel Galaher(Died at birth)',
                recordID : 'gen5rec34'
            },
            {
                name : 'Ursula Galaher',
                recordID : 'gen5rec3'
            },
            {
                name : 'Matthew Adams Galaher',
                recordID : 'gen5rec4'
            },
            {
                name : 'Eliza Cooke Galaher',
                recordID : 'gen5rec5'
            },
        ],
    },

gen4rec23 : {
        person : {
                name : 'Thomas T. Taylor',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : 'Portland OR',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
        },
    spouses : [
            {
                name : 'Jan',
                recordID : 'gen0rec0',
            },
            {
                name : 'Marie Peckenpah',
                recordID : 'gen0rec0',
            },
            {
                name : 'Cornelia Miller Menefee',
                recordID : 'gen4rec1',
            },
        ],
        children : [
            {
                name : 'Tommy Taylor',
                recordID : 'gen5rec46',
            },
            {
                name : 'Marga Taylor',
                recordID : 'gen5rec47',
            },

            {
                name : 'China Taylor',
                recordID : 'gen5rec48',
            },
            {
                name : 'Stewart Taylor',
                recordID : 'gen5rec49',
            },
        ],
    },

gen4rec18 : {
        person : {
                name : 'Robert Brisebane Galaher',
                born_date : 'Nov 14, 1919',
                born_location : 'North Andover Ma.',
                married_date : '',
                married_location : '',
                died_date : 'April 25, 1974',
                died_location : 'Portland OR',
                mother : 'gen3rec16',
                father : 'gen3rec7',
                about : ''

        },
    spouses : [
            {
                name : 'Cornelia Menefee',
                recordID : 'gen4rec1'
            },
        ],
        children : [
            {
                name : 'Abbott Stevens Galaher',
                recordID : 'gen5rec1'
            },
            {
                name : 'Towner Whitelaw Galaher',
                recordID : 'gen5rec2'
            },
            {
                name : 'Nathaniel Galaher(Died at birth)',
                recordID : 'gen5rec34'
            },
            {
                name : 'Ursula Galaher',
                recordID : 'gen5rec3'
            },
            {
                name : 'Matthew Adams Galaher',
                recordID : 'gen5rec4'
            },
            {
                name : 'Eliza Cooke Galaher',
                recordID : 'gen5rec5'
            },
        ],
    },

gen4rec2 : {
        person : {
                name : 'Abbott Stevens Galaher',
                born_date : '1910',
                born_location : 'North Andover,Massachusetts',
                married_date : '1951',
                married_location : '',
                died_date : 'January 11, 2001',
                died_location : 'North Andover, Massachusetts',
                mother : 'gen3rec16',
                father : 'gen3rec7',
                about : ''
        },
    spouses : [
            {
                name : 'Charlotte Woodburn',
                born_date : '1926',
                born_location : 'Methuen, Massachusetts',
                married_date : '1951',
                married_location : '',
                died_date : 'April 5, 1998',
                died_location : 'North Andover, Massachusetts',
                about : ''
            },
        ],
        children : [
            {
                name : 'Charles E Galaher',
                recordID : 'gen5rec6'
            },
        ],
    },
gen4rec7 : {
        person : {
                name : 'Edgar Dean Crumpacker',
                born_date : 'Aug. 29, 1916',
                born_location : 'Portland, OR',
                married_date : '',
                married_location : '',
                died_date : 'Jan. 29, 2004',
                died_location : 'Portland',
                mother : 'gen3rec13',
                father : 'gen3rec6',
                about : 'http://homepage.mac.com/galaher/heritage/mcrumpacker_house.html#edgardean1916'
        },
    spouses : [
            {
                name : 'Flo Erle Russell',
                recordID : 'gen4rec27'
            },
            {
                name : 'Jeanne Fuller',
                recordID : 'gen4rec28'
            },
            {
                name : 'Un Named',
                recordID : 'gen4rec29'
            },
            {
                name : 'Dorothy',
                recordID : 'gen4rec30'
            },
            {
                name : 'Cornelia Menefee',
                recordID : 'gen4rec1',
            },
        ],
        children : [
            {
                name : 'CiCi',
                recordID : 'gen5rec50'
            },
            {
                name : 'Paula Helen Crumpacker',
                recordID : 'gen5rec52'
            },
            {
                name : 'Eve Alani Crumpacker',
                recordID : 'gen5rec32'
            },
            {
                name : 'Pender (Penny?) Lee Crumpacker',
                recordID : 'gen5rec51'
            },
        ],
    },
gen4rec5 : {
        person : {
                name : 'Ann ? Crumpacker',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
        },
    spouses : [
            {
                name : 'Peter Crumpacker',
                recordID : 'gen4rec14'
            },
        ],
        children : [
            {
                name : 'Abby Crumpacker',
                recordID : 'gen5rec18'
            },
            {
                name : 'Emily Crumpacker',
                recordID : 'gen5rec19'
            },
            {
                name : 'Dean Crumpacker',
                recordID : 'gen5rec20'
            },
            {
                name : 'Blair Crumpacker',
                recordID : 'gen5rec21'
                    },
        ],
    },
gen4rec14 : {
        person : {
                name : 'Peter Crumpacker',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen3rec13',
                father : 'gen3rec6',
                about : ''
        },
    spouses : [
            {
                name : 'Ann ? Crumpacker',
                recordID : 'gen4rec5'
            },
        ],
        children : [
            {
                name : 'Abby Crumpacker',
                recordID : 'gen5rec18'
            },
            {
                name : 'Emily Crumpacker',
                recordID : 'gen5rec19'
            },
            {
                name : 'Dean Crumpacker',
                recordID : 'gen5rec20'
            },
            {
                name : 'Blair Crumpacker',
                recordID : 'gen5rec21'
                    },
        ],
    },
gen4rec8 : {
        person : 
                    {
                name : 'Margaret (Peggy) Feir Crumpacker',
                born_date : 'April 01, 1917',
                born_location : 'Winnipeg, Manitoba',
                married_date : '1940',
                married_location : '',
                died_date : 'Jan. 07, 2014',
                died_location : 'Portland OR',
                mother : 'gen0rec0',// Margaret Christie Feir
                father : 'gen0rec0',// James Feir
                about : ''
            },
    spouses : [
            {
                name : 'James (Jimmy) Cook Crumpacker',
                recordID : 'gen4rec15',
            },
        ],
                
        children : [
            {
                name : 'Cully Margaret Crumpacker (Olaf Holte)',
                recordID : 'gen5rec43'
            },
            {
                name : 'Victoria (Vicki) Crumpacker',
                recordID : 'gen5rec44'
            },
            {
                name : 'James Feir Crumpacker (Anne Finkbeiner)',
                recordID : 'gen5rec45'
            },        
                    
        ],
    },

gen4rec15 : {
        person : 
                    {
                name : 'James (Jimmy) Cook Crumpacker',
                born_date : '',
                born_location : '',
                married_date : '1940',
                married_location : '',
                died_date : '2006',        
                died_location : 'Portland',
                mother : 'gen3rec13',
                father : 'gen3rec6',
                about : ''         
            },
    spouses : [
            {
       name : 'Margaret (Peggy) Feir Crumpacker',
                recordID : 'gen4rec8'
            },
        ],
        children : [
            {
                name : 'Cully Margaret Crumpacker (Olaf Holte)',
                recordID : 'gen5rec43'
            },
            {
                name : 'Victoria (Vicki) Crumpacker',
                recordID : 'gen5rec44'
            },
            {
                name : 'James Feir Crumpacker (Anne Finkbeiner)',
                recordID : 'gen5rec45'
            },
        ],
    },
    








gen4rec27 : {
    person : {
        name : 'Flo Erle Russell',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen0rec0',
        father : 'gen0rec0',
        about : ''
    },
    spouses : [ {
        name : 'Edgar Dean Crumpacker',
        recordID : 'gen4rec7'
    },
    ],
        children : [ {
            name : 'CiCi',
            recordID : 'gen5rec50'
        },
    ],
},

gen4rec28 : {
    person : {
        name : 'Jeanne Fuller',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen0rec0',
        father : 'gen0rec0',
        about : ''
    },
    spouses : [ {
        name : 'Edgar Dean Crumpacker',
        recordID : 'gen4rec7'
    },
    ],
        children : [ {
            name : 'Eve Alani Crumpacker',
            recordID : 'gen5rec32'
        },
        {
            name : 'Pender (Penny?) Lee Crumpacker',
            recordID : 'gen5rec51'
        },
    ],
},


gen4rec29 : {
    person : {
        name : 'Unidentified',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen0rec0',
        father : 'gen0rec0',
        about : 'Apparently a con artist or gold digger'
    },
    spouses : [ {
        name : 'Unknown',
        recordID : 'gen0rec0'
    },
    {
        name : 'Edgar Dean Crumpacker',
        recordID : 'gen4rec7'
    },
    ],
        children : [ {
        },
        {

        },
    ],
},

gen4rec30 : {
    person : {
        name : 'Dorothy',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '1981',
        died_location : '',
        mother : 'gen0rec0',
        father : 'gen0rec0',
        about : ''
    },
    spouses : [ {
        name : 'Unknown',
        recordID : 'gen0rec0'
    },
    {
        name : 'Edgar Dean Crumpacker',
        recordID : 'gen4rec7'
    },
    ],
        children : [ {
            name : 'xxx',
            recordID : 'gen0rec0'
        },
        {
            name : 'xxx',
            recordID : 'gen0rec0'
        },
        {
            name : 'xxx',
            recordID : 'gen0rec0'
        },
        {
            name : 'xxx',
            recordID : 'gen0rec0'
        },
    ],
},


gen4rec6 : {
        person : {
                name : 'Margery Skov (Married name)',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                parents : 'gen3rec4',
                about : ''
        },
    spouses : [
            {
                name : '',
                born_date : '19--',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : 'in WWII',
                died_location : 'bombing mission',
                about : ''
            },
            {
                name : 'Mr. Skov',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                about : ''
            },
        ],
        children : [
            {
                name : 'John Skov',
                recordID : 'gen5rec22'
                    },
        ],
    },
gen4rec9 : {
        person : {
                name : 'Sally Neikirk',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen3rec9',
                about : ''
        },
    spouses : [
            {
                name : 'Bob Foy',
                recordID : 'gen4rec16'
            },
            {
                name : 'Tony Torrance',
                about : 'gen4rec24'
            },
        ],
        children : [
            {
                name : 'Stephanie',
                recordID : 'gen5rec31'
            },
            {
                name : 'Megan McKenna',
                recordID : 'gen5rec33'
            },
            {
                name : 'Alex Torrance',
                recordID : 'gen5rec24'
            },
        ],
    },
gen4rec16 : {
        person : {
               name : 'Bob Foy',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',        
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
        },
    spouses : [
            {
                name : 'Sally Neikirk',
                recordID : 'gen4rec9',    
            },
            {
                name : 'Barbara',
                recordID : 'gen0rec0'
            },
        ],
        children : [
            {
                name : 'Stephanie',
                recordID : 'gen5rec31'
            },
            {
                name : 'Megan McKenna',
                recordID : 'gen5rec33'
            },
            {
                name : 'Matthew',
                recordID : 'gen0rec0'
            },
        ],
    },
    
gen4rec24 : {
    person : {
        name : 'Tony Torrance',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen0rec0',
        father : 'gen0rec0',
        about : ''
    },
    spouses : [ 
    {
        name : 'Sally Neikirk',
        recordID : 'gen4rec9'
    },
    {
        name : '...',
        recordID : 'gen0rec0'
    },
    ],
        children : [ {
            name : 'Alex Torrance',
            recordID : 'gen5rec24'
        },
    ],
},

gen4rec10 : {
        person : {
                name : 'Julie Neikirk Headly',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen3rec17',
                father : 'gen3rec9',
                about : ''
        },
    spouses : [
            {
                name : 'Brad Shiley',
                recordID : 'gen4rec25'
            },
            {
                name : 'Bill Headly',
                recordID : 'gen4rec26'
            },
        ],
        children : [
            {
                name : 'Sam Shiley',
                recordID : 'gen5rec40'
            },
            {
                name : 'Cynthia Shiley',
                recordID : 'gen5rec41'
            },
        ],
    },

gen4rec25 : {
        person : {
                name : 'Brad Shiley',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen3rec17',
                father : 'gen3rec9',
                about : ''
        },
    spouses : [
            {
                name : 'Julie Neikirk',
                recordID : 'gen4rec10'
            },
            {
                name : 'Karen',
                recordID : 'gen0rec0'
            },
        ],
        children : [
            {
                name : 'Sam Shiley',
                recordID : 'gen5rec40'
            },
            {
                name : 'Cynthia Shiley',
                recordID : 'gen5rec41'
            },
        ],
    },

gen5rec40 : {
        person : {
                name : 'Sam Shiley',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec10',
                father : 'gen4rec25',
                about : ''
        },
    spouses : [
            {
                name : 'Jenny McQuire',
                recordID : 'gen0rec0'
            },
        ],
        children : [
            {
                name : 'Brook Shiley',
                recordID : 'gen0rec0'
            },
            {
                name : 'Matthew Shiley',
                recordID : 'gen0rec0'
            },
        ],
    },

gen5rec41 : {
        person : {
                name : 'Cynthia Shiley',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec10',
                father : 'gen4rec25',
                about : ''
        },
    spouses : [
            {
                name : 'Eric Moon',
                recordID : 'gen0rec0'
            },
        ],
        children : [
            {
                name : 'Calder',
                recordID : 'gen0rec0'
            },
            {
                name : 'Keegan',
                recordID : 'gen0rec0'
            },
        ],
    },

gen4rec26 : {
        person : {
                name : 'Bill Headly',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen3rec17',
                father : 'gen3rec9',
                about : ''
        },
    spouses : [
            {
                name : 'Julie Neikirk',
                recordID : 'gen4rec10'
            },
        ],
        children : [{}
        ],
    },

gen4rec11 : {
        person : {
                name : 'Bill Neikirk',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '1998?',        
                died_location : 'Redding? Ca',
                mother : 'gen0rec0',
                father : 'gen3rec9',
                about : ''
        },
    spouses : [
            {
                name : 'Teresa Neikirk',
                recordID : 'gen4rec17'
            },
        ],
        children : [
            {
                name : 'Alex Neikirk',
                recordID : 'gen6rec19'
            },
            {
                name : '...',
                recordID : 'gen0rec0'
            },
        ],
    },
gen4rec17 : {
        person : {
                name : 'Teresa Neikirk',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',        
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
        },
    spouses : [
            {
       name : 'Bill Neikirk',
                recordID : 'gen4rec11'
            },
        ],
        children : [
            {
                name : 'Alex',
                recordID : 'gen6rec19'
            },
            {
                name : '...',
                recordID : 'gen0rec0'
            },
        ],
    },
gen5rec7 : {
        person : {
                name : 'Sally Menefee',
                born_date : '1957',
                born_location : '',
                married_date : ' 1970',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec12',
                father : 'gen4rec4',
                about : ''
        },
    spouses : [
            {
                name : 'Michael Moore',
                recordID : 'gen5rec26'
            },
        ],
        children : [
            {
                name : 'Sarah Moore',
                recordID : 'gen6rec5'
                    },
        ],
    },
gen5rec26 : {
        person : {
                name : 'Michael Moore',
                born_date : '1955',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
        },
    spouses : [
            {
                name : 'Sally Menefee',
                recordID : 'gen5rec7'
            },
        ],
        children : [
            {
                name : 'Sarah Moore',
                recordID : 'gen6rec5'
                    },
        ],
    },
gen5rec9 : {
        person : {
                name : 'Caroline Menefee',
                born_date : '19--',
                born_location : '',
                married_date : '19--',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec12',
                father : 'gen4rec4',
                about : ''
        },
    spouses : [
            {
                name : 'Jim Sheahan',
                recordID : 'gen5rec27'
            },
        ],
        children : [
            {
                name : 'Max Sheahan',
                recordID : 'gen6rec8'
            },
            {
                name : 'Maggie Sheahan',
                recordID : 'gen6rec9'
                    },
        ],
    },
gen5rec27 : {
        person : {
               name : 'Jim Sheahan',
                born_date : '19--',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
        },
    spouses : [
            {
                name : 'Caroline Menefee',
                recordID : 'gen5rec9'         
            },
        ],
        children : [
            {
                name : 'Max Sheahan',
                recordID : 'gen6rec8'
            },
            {
                name : 'Maggie Sheahan',
                recordID : 'gen6rec9'
                    },
        ],
    },

gen5rec46 : {
    person : {
        name : 'Tommy Taylor',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen0rec0',
        father : 'gen4rec23',
        about : ''
    },
    spouses : [ {
        name : 'Judy',
        recordID : 'gen0rec0'
    },
    ],
        children : [ {
            name : 'Aurora',
            recordID : 'gen0rec0'
        },
    ],
},

gen5rec47 : {
    person : {
        name : 'Marga Taylor',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen0rec0',
        father : 'gen4rec23',
        about : ''
    },
    spouses : [ {
        name : 'Matt',
        recordID : 'gen0rec0'
    },
    ],
        children : [ {
            name : 'xxx',
            recordID : 'gen0rec0'
        },
        {
            name : 'xxx',
            recordID : 'gen0rec0'
        },
    ],
},

gen5rec48 : {
    person : {
        name : 'China Taylor',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen0rec0',
        father : 'gen4rec23',
        about : ''
    },
    spouses : [ {
        name : 'Nick Weitzer',
        recordID : 'gen0rec0',
    },
    ],
        children : [ {
            name : 'Monica',
            recordID : 'gen0rec0',
        },
        {
            name : 'Alex',
            recordID : 'gen0rec0',
        },
    ],
},

gen5rec49 : {
    person : {
        name : 'Stewart Taylor',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen0rec0',
        father : 'gen4rec23',
        about : ''
    },
    spouses : [ {
        name : 'xxx',
        recordID : 'gen0rec0'
    },
    ],
        children : [ {
            name : 'xxx',
            recordID : 'gen0rec0'
        },
        {
            name : 'xxx',
            recordID : 'gen0rec0'
        },
    ],
},

//         grandchildren, , Peter Seelig, Emily Seelig (Sudhir Oberoi), Catherine Crumpacker (Gresham Stafford) and James Fleming Crumpacker
//         and eight great-grandchildren. She was predeceased by her  sister, Cleone Feir Stoloff, in 2013. 

gen5rec43 : {
    person : {
        name : 'Cully Margaret Crumpacker (Olaf Holte)',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen4rec8',
        father : 'gen4rec15',
        about : ''
    },
    spouses : [ {
        name : 'xxx',
        recordID : 'gen0rec0'
    },
    ],
        children : [ {
            name : 'Christie Holte (Gerard Lester)',
            recordID : 'gen0rec0'
        },
        {
            name : 'Erik Holte (Annika East)',
            recordID : 'gen0rec0'
        },
    ],
},

gen5rec44 : {
    person : {
        name : 'Victoria (Vicki) Crumpacker',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen4rec8',
        father : 'gen4rec15',
        about : ''
    },
    spouses : [ {
        name : 'xxx',
        recordID : 'gen0rec0'
    },
    ],
        children : [ {
            name : 'xxx',
            recordID : 'gen0rec0'
        },
        {
            name : 'xxx',
            recordID : 'gen0rec0'
        },
    ],
},

gen5rec45 : {
    person : {
        name : 'James Feir Crumpacker (Anne Finkbeiner)',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen4rec8',
        father : 'gen4rec15',
        about : ''
    },
    spouses : [ {
        name : 'xxx',
        recordID : 'gen0rec0'
    },
    ],
        children : [ {
            name : 'xxx',
            recordID : 'gen0rec0'
        },
        {
            name : 'xxx',
            recordID : 'gen0rec0'
        },
    ],
},

gen6rec8 : {
        person : {
                name : 'Max Sheahan',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                parents : 'gen5rec27',
                about : ''
        },
    spouses : [
            {
                name : '',
//                 recordID : 'gen0rec0'         
            },
        ],
        children : [
            {
                name : '',
//                 recordID : 'gen0rec0'
            },
        ],
    },
gen6rec9 : {
        person : {
                name : 'Maggie Sheahan',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                parents : 'gen5rec27',
                about : ''
        },
    spouses:[{},],
        children:[{},],
    },
gen5rec8 : {
        person : {
                name : 'Cornelia Menefee',
                born_date : '19',
                born_location : '',
                married_date : '19--',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec12',
                father : 'gen4rec4',
                about : ''
        },
    spouses : [
            {
                name : 'Michael Laugherty',
                recordID : 'gen5rec28'
            },
        ],
        children : [
            {
                name : 'Isabell Laugherty',
                recordID : 'gen6rec6'
            },
            {
                name : 'Caroline Laugherty',
                recordID : 'gen6rec7'
                    },
        ],
    },
gen5rec28 : {
        person : {
                name : 'Michael Laugherty',
                born_date : '19',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
        },
    spouses : [
            {
                name : 'Cornelia Menefee',
                recordID : 'gen5rec8'
            },
        ],
        children : [
            {
                name : 'Isabell Laugherty',
                recordID : 'gen6rec6'
            },
            {
                name : 'Caroline Laugherty',
                recordID : 'gen6rec7'
                    },
        ],
    },
gen6rec6 : {
        person : {
                name : 'Isabell Laugherty',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
        },
    spouses:[{},],
    children:[{},],
    },
    gen6rec7 : {
        person : {
                name : 'Caroline Menefee Laugherty',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec12',
                father : 'gen4rec4',
                about : ''
        },
    spouses:[{},],
        children:[{},],
    },

gen5rec10 : {
        person : {
                name : 'Betsy Menefee Rickels',
                born_date : '19--',
                born_location : '',
                married_date : '19--',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec12',
                father : 'gen4rec4',
                about : ''
        },
    spouses : [
            {
                name : 'Arnoud Menesson',
                recordID : 'gen5rec35'
            },
            {
                name : 'Norm Rickles',
                recordID : 'gen5rec36'
            },
        ],
        children : [
            {
                name : 'Margaux Menesson',
                recordID : 'gen6rec10'
            },
            {
                name : 'William Menesson',
                recordID : 'gen6rec11'
            },
        ],
    },

gen5rec35 : {
    person : {
        name : 'Arnoud Menesson',
        born_date : '19--',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '20--',
        died_location : 'Tumalo OR',
        mother : 'gen0rec0',
        father : 'gen0rec0',
        about : ''
    },
    spouses : [ {
        name : 'Betsy Menefee Rickels',
        recordID : 'gen5rec10'
    },
    ],
        children : [
            {
                name : 'Margaux Menesson',
                recordID : 'gen6rec10'
            },
            {
                name : 'William Menesson',
                recordID : 'gen6rec11'
            },
        ],
},

gen5rec36 : {
    person : {
        name : 'Norm Rickles',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen0rec0',
        father : 'gen0rec0',
        about : ''
    },
    spouses : [ {
        name : 'Betsy Menefee Rickels',
        recordID : 'gen5rec10'
    },
    ],
        children : [{},{},],
},

gen6rec10 : {
        person : {
                name : 'Margaux Menesson',
                born_date : '1',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                parents : 'gen5rec10',
                about : ''
        },
    spouses : [
            {
            },
            {
            },
        ],
        children : [
            {
            },
            {
                    },
        ],
    },
gen6rec11 : {
        person : {
                name : 'William Menesson',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                parents : 'gen5rec10',
                about : ''
        },
    spouses : [
            {
                name : 'Britney',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                about : ''
            },
        ],
        children : [
            {
            },
            {
                    },
        ],
    },
gen5rec11 : {
        person : {
                name : 'John Menefee',
                born_date : '19--',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec12',
                father : 'gen4rec4',
                about : ''
        },
    spouses : [
            {
                name : 'Shiela',
                recordID : 'gen0rec0'
            },
            {
                name : 'Jane (Jani) K. Tormey Menefee',
                recordID : 'gen5rec42',
            },
        ],
        children : [
            {
                name : 'Ellie Menefee',
                recordID : 'gen6rec12'
            },
            {
                name : 'Mati Menefee',
                recordID : 'gen6rec13'
            },
            {
                name : 'Towner Menefee',
                recordID : 'gen6rec14'
            },
            {
                name : 'John Brian Menefee',
                recordID : 'gen6rec15'
            },
            {
                name : 'Michael Menefee',
                recordID : 'gen6rec16'
                    },
        ],
    },

gen5rec42 : {
    person : {
        name : 'Jane (Jani) K. Tormey Menefee', 
        born_date : 'July 02, 1961',
        born_location : '',
        married_date : '1990',
        married_location : '',
        died_date : 'Oct 30, 2009',
        died_location : '',
        mother : 'gen0rec0',
        father : 'gen0rec0',
        about : ''
    },
    spouses : [ {
        name : 'John Menefee',
        recordID : 'gen5rec11'
    },
    ],
        children : [  
            {
                name : 'Ellie Menefee',
                recordID : 'gen6rec12'
            },
            {
                name : 'Mati Menefee',
                recordID : 'gen6rec13'
            },
            {
                name : 'Towner Menefee',
                recordID : 'gen6rec14'
            },
            {
                name : 'John Brian Menefee',
                recordID : 'gen6rec15'
            },
            {
                name : 'Michael Menefee',
                recordID : 'gen6rec16'
            },
    ],
},

gen5rec13 : {
        person : {
                name : 'Christine Menefee',
                born_date : '196',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec12',
                father : 'gen4rec4',
                about : ''
        },
    spouses : [
            {
                name : 'Wes McNeil',
                recordID : 'gen5rec37'
            },
        ],
        children : [
            {
                    },
        ],
    },

gen5rec37 : {
    person : {
        name : 'Wes McNeil',
        born_date : '',
        born_location : 'England',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen0rec0',
        father : 'gen0rec0',
        about : ''
    },
    spouses : [ {
        name : 'Christine Menefee',
        recordID : 'gen5rec13'
    },
    ],
        children : [ {
            name : 'Uriah',
            recordID : 'gen0rec0'
        },
    ],
},

gen5rec14 : {
        person : {
                name : 'Peter Menefee',
                born_date : '196-',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec12',
                father : 'gen4rec4',
                about : ''
        },
    spouses : [

            {
                name : 'Courtney Prendergast',
                recordID : 'gen5rec39'
            },
            {
                name : 'Guiness',
                recordID : 'gen5rec38'
            },
        ],
        children : [
            {
                name : 'Whitney Menefee',
                recordID : 'gen6rec20'
            },
            {
                name : 'Jack Menefee',
                recordID : 'gen6rec21'
            },
            {
                name : 'Lucy Menefee',
                recordID : 'gen6rec22'
                    },
        ],
    },

gen5rec38 : {
    person : {
        name : 'Guiness',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen0rec0',
        father : 'gen0rec0',
        about : ''
    },
    spouses:[{
        name : 'Peter Menefee',
        recordID : 'gen5rec14'
    
    },],
    children:[{},],
},

gen5rec39 : {
    person : {
        name : 'Courtney Prendergast',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen0rec0',
        father : 'gen0rec0',
        about : ''
    },
    spouses:[{
            name : 'Peter Menefee',
        recordID : 'gen5rec14'
    
    },],
    children:[
                {
                name : 'Whitney Menefee',
                recordID : 'gen6rec20'
            },
            {
                name : 'Jack Menefee',
                recordID : 'gen6rec21'
            },
            {
                name : 'Lucy Menefee',
                recordID : 'gen6rec22'
            },
    ],
},

gen6rec20 : {
    person : {
        name : 'Whitney Menefee',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen5rec39',
        father : 'gen5rec14',
        about : ''
    },
    spouses:[{},],
    children:[{},],
},

gen6rec21 : {
    person : {
        name : 'Jack Menefee',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen5rec39',
        father : 'gen5rec14',
        about : ''
    },
    spouses:[{},],
    children:[{},],
},

gen6rec22 : {
    person : {
        name : 'Lucy Menefee',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen5rec39',
        father : 'gen5rec14',
        about : ''
    },
    spouses:[{},],
    children:[{},],
},

gen1rec32 : {
        person : {
                name : 'Penny Crumpacker',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
        },
    spouses : [
            {
                name : 'Martin Cahoon',
                born_date : '19--',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                about : ''
            },
        ],
        children : [
            {
                name : 'R',
                recordID : 'gen0rec0'
            },
            {
                name : 'E',
                recordID : 'gen0rec0'
                    },
        ],
    },
gen5rec22 : {
        person : {
                name : 'John Skov',
                born_date : '194-',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec6',
                father : 'gen0rec0',
                about : ''
        },
    spouses : [
            {
                name : 'Susan',
                about : 'gen0rec0'
            },
        ],
        children : [
            {
                name : 'Andy Skov',
                recordID : 'gen0rec0'
            },
            {
                name : 'Karrie Skov',
                recordID : 'gen0rec0'
            },
            {
                name : 'Peter Skov',
                recordID : 'gen0rec0'
                    },
        ],
    },
gen5rec18 : {
        person : {
                name : 'Abby Crumpacker',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec5',
                father : 'gen4rec14',
                about : ''
        },
    spouses : [
            {
                name : 'Bob Vieira',
                recordID : 'gen0rec0'
            },
        ],
        children : [
            {
                name : 'John',
                recordID : 'gen0rec0'
            },
            {
                name : 'Annie',
                recordID : 'gen0rec0'
            },
            {
                name : 'Henry',
                recordID : 'gen0rec0'
                    },
        ],
    },
gen5rec19 : {
        person : {
                name : 'Emily Crumpacker',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec5',
                father : 'gen4rec14',
                about : ''
        },
    spouses:[{},],
    children:[{},],

    },
gen5rec20 : {
        person : {
                name : 'Dean Crumpacker',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec5',
                father : 'gen4rec14',
                about : ''
        },
    spouses:[{},],
    children:[{},],
    },
gen5rec21 : {
        person : {
                name : 'Blair Crumpacker',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec5',
                father : 'gen4rec14',
                about : ''
        },
    spouses:[{},],
    children:[{},],
    },
/*    
Abbott is '54 and Towner is '55. Urs is right. Don't know about
Charles. Mom is March 9 1926, Dad is November 14, 1919. On the
other end, Dad is April 25 1974, mom is September 16, 1994, and
Abbott is January 30 2002. 
*/
gen5rec1 : {
        person : {
                name : 'Abbott Stevens Galaher',
                born_date : 'March 4, 1954',
                born_location : 'Portland OR',
                married_date : '',
                married_location : '',
                died_date : 'January 30, 2002',
                died_location : 'Kona, Hawaii',
                mother : 'gen4rec1',
                father : 'gen4rec18',
                about : ''
        },
    spouses : [
            {
                name : 'Eve Alani Crumpacker',
                recordID : 'gen5rec32'
            },
        ],
        children : [
            {
                name : 'Emily Anne Galaher',
                recordID : 'gen6rec1'
                    },
        ],
    },

gen5rec32 : {
        person : {
                name : 'Eve Alani Crumpacker',
                born_date : '19',
                born_location : '',
                married_date : '19--',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec28',
                father : 'gen4rec7',
                about : ''
        },
    spouses : [
            {
            name : 'Abbott Stevens Galaher',
            recordID : 'gen5rec1'
            },
        ],
        children : [
            {
                name : 'Emily Anne Galaher',
                recordID : 'gen6rec1'
                    },
        ],
    },


gen5rec50 : {
    person : {
        name : 'CiCi',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen4rec27',
        father : 'gen4rec7',
        about : ''
    },
    spouses : [ {
        name : 'xxx',
        recordID : 'gen0rec0'
    },
    ],
        children : [ {
        },
        {

        },
    ],
},
gen5rec51 : {
    person : {
        name : 'Pender (Penny?) Lee Crumpacker',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen4rec28',
        father : 'gen4rec7',
        about : ''
    },
    spouses : [ {
    },
    ],
        children : [ {

        },
        {
        },
    ],
},
gen5rec52 : {
    person : {
        name : 'Paula Helen Crumpacker',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen0rec0',
        father : 'gen4rec7',
        about : ''
    },
    spouses : [ {

    },
    ],
        children : [ {
        },
        {
        },
    ],
},















































gen5rec2 : {
        person : {
                name : 'Towner Whitelaw Galaher',
                born_date : 'April 28, 1955',
                born_location : 'Portland OR',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec1',
                father : 'gen4rec18',
                about : ''
        },
    spouses : [
            {
                name : 'Lilia Gamarra',
                recordID : 'gen5rec29'
            },
        ],
        children : [
            {
                name : 'Whitney Victoria Galaher',
                recordID : 'gen6rec2'
            },
            {
                name : 'Heather Galaher',
                recordID : 'gen6rec3'
                    },
        ],
    },
gen5rec29 : {
        person : {
                name : 'Lilia Gamarra',
                mother : 'gen0rec0',
                father : 'gen0rec0',
        },
    spouses : [
            {
                name : 'Towner Whitelaw Galaher',
                recordID : 'gen5rec2'
            },
        ],
        children : [
            {
                name : 'Whitney Victoria Galaher',
                recordID : 'gen6rec2'
            },
            {
                name : 'Heather Galaher',
                recordID : 'gen6rec3'
                    },
        ],
    },
gen5rec3 : {
        person : {
                name : 'Ursula Galaher',
                born_date : 'December 26, 1958',
                born_location : 'China',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec1',
                father : 'gen4rec18',
                about : ''
        },
    spouses:[{},],
        children:[{},],
    },

gen5rec34 : {
    person : {
        name : 'Nathaniel Galaher',
        born_date : '',
        born_location : 'Portland OR',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : 'Portland OR',
        mother : 'gen4rec1',
        father : 'gen4rec18',
        about : ''
    },
    spouses : [{},],
    children : [{},],
},

gen5rec4 : {
        person : {
                name : 'Matthew Adams Galaher',
                born_date : 'April 5, 1963',
                born_location : 'Portland OR',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec1',
                father : 'gen4rec18',
                about : ''
        },
    spouses : [
            {
                name : 'Megan McKenna Torrance',
                recordID : 'gen5rec33'
            },
        ],
        children : [
            {
                name : 'McKenna Culla (Cully) Galaher',
                recordID : 'gen6rec4'
                    },
        ],
    },
gen5rec33 : {
        person : {
       name : 'Megan McKenna Torrance',
                born_date : 'Feb 10, 1965',
                born_location : 'Compton Ca',
                married_date : ' August 8, 1998',
                married_location : 'Portland OR',
                died_date : '',
                died_location : '',
                mother : 'gen4rec9',
                father : 'gen4rec16',
                about : ''
        },
    spouses : [
            {
                name : 'Matthew Adams Galaher',
                recordID : 'gen5rec4'
            },
        ],
        children : [
            {
                name : 'McKenna Culla (Cully) Galaher',
                recordID : 'gen6rec4'
                    },
        ],
    },
gen5rec5 : {
        person : {
                name : 'Eliza Cooke Galaher',
                born_date : 'January 22, 1965',
                born_location : 'Portland OR',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec1',
                father : 'gen4rec18',
                about : ''
        },
    spouses:[{},],
        children:[{},],
    },
gen5rec6 : {
        person : {
                name : 'Charles Galaher',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                parents : 'gen4rec2',
                about : ''
        },
    spouses : [
            {
                name : 'Susan',
                recordID : 'gen5rec30',
            },
        ],
        children:[{},],
    },
gen5rec30 : {
        person : {
                name : 'Susan',
                born_date : '1962',
                born_location : '',
                married_date : '2001',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
        },
    spouses : [
            {
                name : 'Charles Galaher',
                recordID : 'gen5rec6'
            },
        ],
        children:[{},],
    },
gen5rec15 : {
        person :             {
                name : 'Wendy Menefee',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '2014-02-09',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                parents : 'gen4rec3',
                about : ''
            },
    spouses:[{},],
        children:[{},],
    },
gen5rec16 : {
        person : {
                name : 'Jennifer Menefee',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                parents : 'gen4rec3',
                about : ''
        },
    spouses:[{},],
        children:[{},],
    },
gen5rec17 : {
        person : {
                name : 'Christopher Menefee',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                parents : 'gen4rec3',
                about : ''
        },
    spouses:[{},],
        children:[{},],
    },
gen5rec23 : {
        person : {
                name : 'Todd Schurz',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',        
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
        },
    spouses : [
            {
                name : 'Stephanie Torrance',
                recordID : 'gen5rec31'
            },
        ],
        children : [
            {
                name : 'Anthony Schurz',
                recordID : 'gen6rec17'
            },
            {
                name : 'Caroline Schurz',
                recordID : 'gen6rec18'
            },
        ],
    },
gen5rec31 : {
        person : {
                name : 'Stephanie Torrance',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec9',
                father : 'gen4rec16',
                about : ''
        },
    spouses : [
            {
                name : 'Todd Schurz',
                recordID : 'gen5rec23'
            },
        ],
        children : [
            {
                name : 'Anthony Schurz',
                recordID : 'gen6rec17'
            },
            {
                name : 'Caroline Schurz',
                recordID : 'gen6rec18'
            },
        ],
    },
gen5rec24 : {
        person : {
                name : 'Alex Torrance',
                born_date : '196',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec9',
                father : 'gen4rec24',
                about : ''
        },
    spouses:[{},],
        children : [
            {
                name : ''
                    },
        ],
    },
gen6rec5 : {
        person : {
                name : 'Sarah Moore (Add two children)',
                born_date : 'Feb 28, 19??',
                born_location : '',
                married_date : '2005',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen0rec0',
                father : 'gen0rec0',
                about : ''
        },
    spouses : [
            {
                name : 'Kevin',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                about : ''
            },
        ],
        children : [
            {
                name : '',
                recordID : 'gen0rec0'
                    },
        ],
    },
gen6rec1 : {
        person : {
                name : 'Emily Anne Galaher',
                born_date : 'July 23, 198',
                born_location : 'Oahu, HI',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen5rec32',
                father : 'gen5rec1',
                about : ''
        },
    spouses:[{},],
        children:[{},],
    },
gen6rec2 : {
        person : {
                name : 'Whitney Victoria Galaher',
                born_date : 'July 5, 1991',
                born_location : 'Brooklyn, NY',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen5rec29',
                father : 'gen5rec2',
                about : ''
        },
    spouses:[{},],
        children:[{},],
    },
gen6rec3 : {
        person : {
                name : 'Heather Galaher',
                born_date : 'October 17, 1997',
                born_location : 'Brooklyn, NY',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen5rec29',
                father : 'gen5rec2',
                about : ''
        },
    spouses:[{},],
        children:[{},],
    },
gen6rec4 : {
        person : {
                name : 'McKenna Culla (Cully) Galaher',
                born_date : 'July 5, 2000',
                born_location : 'Portland, OR',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen5rec33',
                father : 'gen5rec4',
                about : ''
        },
    spouses:[{},],
        children:[{},],
    },
gen6rec17 : {
        person : {
                name : 'Anthony Schurz',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen5rec31',
                father : 'gen5rec23',
                about : ''
        },
    spouses:[{},],
        children:[{},],
    },
gen6rec18 : {
        person : {
                name : 'Caroline Schurz',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen5rec31',
                father : 'gen5rec23',
                about : ''
        },
    spouses:[{},],
        children:[{},],
    },
gen6rec19 : {
        person : {
                name : 'Alex Neikirk',
                born_date : '',
                born_location : '',
                married_date : '',
                married_location : '',
                died_date : '',
                died_location : '',
                mother : 'gen4rec17',
                father : 'gen4rec11',
                about : ''
            },
    spouses:[{},],
        children:[{},],
    },

gen6rec12 : {
    person : {
        name : 'Ellie Menefee',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen5rec42',
        father : 'gen5rec11',
        about : ''
    },
    spouses : [ {
        name : 'Jeff Millan',
        recordID : 'gen0rec0'
    },
    ],
        children : [ {

        },
        {

        },
    ],
},
    
gen6rec13 : {
    person : {
        name : 'Mati Menefee',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen5rec42',
        father : 'gen5rec11',
        about : ''
    },
    spouses : [ {
    },
    ],
        children : [ {

        },
        {

        },
    ],
},
    
gen6rec14 : {
    person : {
        name : 'Towner Menefee',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen5rec42',
        father : 'gen5rec11',
        about : ''
    },
    spouses : [ {
    },
    ],
        children : [ {

        },
        {

        },
    ],
},
    
gen6rec15 : {
    person : {
        name : 'John Brian Menefee',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen5rec42',
        father : 'gen5rec11',
        about : ''
    },
    spouses : [ {
    },
    ],
        children : [ {

        },
        {

        },
    ],
},
    
gen6rec16 : {
    person : {
        name : 'Michael Menefee',
        born_date : '',
        born_location : '',
        married_date : '',
        married_location : '',
        died_date : '',
        died_location : '',
        mother : 'gen5rec42',
        father : 'gen5rec11',
        about : ''
    },
    spouses : [ {

    },
    ],
        children : [ {

        },
        {
        },
    ],
},

}; /*closes treeDB object*/