import * as xlsx from 'xlsx';

const json = {
	"models": [
		{
            "model": "ATVMOD1",
            "spec": "CA",
            "color": "BLK",
            "year": 2018,
            "inventory": 10
        },
        {
            "model": "ATVMOD2",
            "spec": "CA",
            "color": "BLK",
            "year": 2017,
            "inventory": 6
        },
        {
            "model": "CRUISERMOD1",
            "spec": "CA",
            "color": "CMG",
            "year": 2018,
            "inventory": 10
        },
        {
            "model": "CRUISERMOD2",
            "spec": "CA",
            "color": "CMG",
            "year": 2017,
            "inventory": 6
        }
    ]
};

function exportJSON(){
	const ws = xlsx.utils.json_to_sheet(json.models);
	const wb = xlsx.utils.book_new();
	xlsx.utils.book_append_sheet(wb, ws, 'test');
	xlsx.writeFile(wb, "testfile.xlsx");
}

exportJSON();