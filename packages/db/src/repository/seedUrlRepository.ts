import { Types } from 'mongoose';
import { seedUrlModel } from '../model/seedUrlModel.js';
import { RepositoryResponseType } from '../types/repositoryResponseType.js';
import { SeedUrlType } from '../types/seedUrlType.js';
import { UrlCrawledType } from '../types/urlCrawledTypes.js';
import { analyzedDataType } from '../types/analyzedDataType.js';


export const seedUrlRepository = {
    addSeedUrl,
    getUrlsCrawled,
    getAnalyzedData,
    updateAnalyzedData,
    updateSeedUrlStatus,
    findByUrl
}




// ############################ add data to seedUrl collection #########################

async function addSeedUrl(seedUrlInfo: SeedUrlType) {
    return await seedUrlModel.create(seedUrlInfo);

}



// ######################## get data from seedUrl collection #########################

async function getUrlsCrawled(seedUrlId: string | Types.ObjectId): Promise<{ urlCrawled: UrlCrawledType[] } | null> {
    return await seedUrlModel
        .findById(seedUrlId)
        .select('-_id urlCrawled ')
        .populate('urlCrawled')
        .lean<{ urlCrawled: UrlCrawledType[] }>();
}

async function getAnalyzedData(seedUrlId: string | Types.ObjectId): Promise<{ analyzedData: analyzedDataType } | null> {

    return await seedUrlModel.findById(seedUrlId)
        .select("-_id analyzedData")
        .populate("analyzedData")
        .lean<{ analyzedData: analyzedDataType }>()

}

// ######################## update data in seedUrl collection #########################

async function updateAnalyzedData(seedUrlId: string | Types.ObjectId, analyzedDataId: string | Types.ObjectId) {
    return await seedUrlModel.findByIdAndUpdate(
        seedUrlId,
        { analyzedData: analyzedDataId },
        { new: true }
    );
}

async function updateSeedUrlStatus(seedUrlId: string | Types.ObjectId, status: SeedUrlType["status"]) {
    return await seedUrlModel.findByIdAndUpdate(
        seedUrlId,
        { status },
        { new: true }
    );
}



export async function findByUrl(seedUrl: string) {
    return await seedUrlModel.findOne({ seedUrl });
}