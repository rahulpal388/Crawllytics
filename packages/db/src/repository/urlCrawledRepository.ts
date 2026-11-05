import { Types } from "mongoose";
import { RepositoryResponseType } from "../types/repositoryResponseType.js";
import UrlCrawledModel from "../model/crawlDomainModel/urlCrawledModel.js";
import { UrlCrawledSchemaType } from "../types/crawlTypes/urlCrawledTypes.js";

export const urlCrawledRepository = {
  addUrlCrawled,
  getUrlCrawledWithoutAnalyzedUrlData,
  getUrlCrawled,
  updateUrlCrawled,
};

// ###################### add  #######################

async function addUrlCrawled(urlInfo: UrlCrawledSchemaType) {
  try {
    const { projectId, url: newUrl, ...rest } = urlInfo;
    const url = await UrlCrawledModel.findOneAndUpdate(
      { projectId: urlInfo.projectId, url: urlInfo.url },
      {
        $set: rest,
        $setOnInsert: {
          projectId: projectId,
          url: newUrl,
        },
      },
      { upsert: true, new: true },
    );
    return {
      success: true,
      data: url,
    };
  } catch (err) {
    console.error("Error adding URL Crawled data:", err);
    return {
      success: false,
      data: null,
    };
  }
}

// ###################### get without analyzedUrlData #######################

async function getUrlCrawledWithoutAnalyzedUrlData(
  _id: Types.ObjectId | string,
): Promise<RepositoryResponseType<Omit<UrlCrawledSchemaType, "analyzedUrlData">>> {
  try {
    const urlCrawledData = await UrlCrawledModel.findById(_id)
      .select("-_id -__v -analyzedUrlData")
      .lean();

    if (!urlCrawledData) {
      return {
        success: false,
      };
    }

    return {
      success: true,
      data: urlCrawledData,
    };
  } catch (err) {
    console.error("Error fetching URL Crawled data:", err);
    return {
      success: false,
    };
  }
}

// ######################## get #######################

async function getUrlCrawled(
  _id: Types.ObjectId | string,
): Promise<RepositoryResponseType<UrlCrawledSchemaType>> {
  try {
    const urlCrawledData = await UrlCrawledModel.findById(_id).select("-_id -__v").lean();

    if (!urlCrawledData) {
      return {
        success: false,
      };
    }

    return {
      success: true,
      data: urlCrawledData,
    };
  } catch (err) {
    console.error("Error fetching URL Crawled data:", err);
    return {
      success: false,
    };
  }
}

// ###################### update  #######################

async function updateUrlCrawled() {}
