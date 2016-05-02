

/*
 * Copyright (c) 2013 EMBL - European Bioinformatics Institute
 * Licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

var exampleQueries = [

    {
        shortname : "Geonames & Swiss Library Statistics",
        description: "Number of Libraries per District",
        query:"PREFIX lgd:   <http://linkedgeodata.org/triplify/>\n" +
            	"PREFIX lgdo:    <http://linkedgeodata.org/ontology/>\n" +
            	"PREFIX lgd-adress:  <http://linkedgeodata.org/ontology/addr/>\n" +
            	"PREFIX lod-libraries: <http://linkeddata.fh-htwchur.ch/libraryData#>\n" +
            	"PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n" +
            	"PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n" +
            	"PREFIX gn: <http://www.geonames.org/ontology#>\n" +
            	"PREFIX lod-swissmaps:  <http://linkeddata.fh-htwchur.ch/swissmap#>\n" +
            	"SELECT ?swissmap_district_name ?swissmap_district_id (COUNT(?swissmap_district_name) AS ?numberOfLibraries)\n" +  
            	"WHERE {\n" +
            	        "?district gn:featureCode gn:A.ADM2;\n" +
            	        	"gn:name ?district_name;\n" +
            				"lod-swissmaps:ref ?swissmapdistrict .\n" +
            			"?swissmapdistrict\n" +
            				"lod-swissmaps:name ?swissmap_district_name;\n" +
            				"lod-swissmaps:id ?swissmap_district_id .\n" +
            	        "?admin2Child gn:parentADM2 ?district;\n" +
            	        	"gn:name ?admin2child_name;\n" +
            	        	"gn:featureClass gn:P;\n" +
            	        	"gn:postalCode ?postalcode .\n" +
            	    	"SERVICE <http://linkeddata.fh-htwchur.ch/openrdf-sesame/repositories/LibraryStatisticData> {\n" +
            	    		"?library_statDat lod-libraries:postalCode_stat ?postalcode;\n" +
            	    			"rdfs:label ?libstat_label .\n" +
            	    	"}\n" +
            	"}\n" +
            	"GROUP BY ?swissmap_district_name ?swissmap_district_id"
    } 
    
]

