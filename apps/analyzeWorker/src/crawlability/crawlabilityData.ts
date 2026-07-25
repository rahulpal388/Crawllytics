import { PageCrawlabilityAnalysis } from "@repo/config/types/analysesTypes/perPages/pageCrawlability";
import { GatherInfoType } from "@/types/gatherInfoType.js";

export function crawlabilityData(gatherInfo: GatherInfoType): PageCrawlabilityAnalysis {

    // ############### url section ###########################
    const url = gatherInfo.networkInfo.url;
    const protocol = gatherInfo.networkInfo.protocol;
    let hostname = "";
    let pathname = "";

    try {
        const urlObj = new URL(url);
        hostname = urlObj.hostname;
        pathname = urlObj.pathname;
    } catch {

    }


    // ############## http response #########################
    const statusCode = gatherInfo.networkInfo.statusCode;
    const method = gatherInfo.networkInfo.method;
    const redirectChain = gatherInfo.networkInfo.redirectChain.map(x => x.redirectedTo);
    const redirectCount = gatherInfo.networkInfo.redirectChain.length;
    const isRedirectLoop = gatherInfo.networkInfo.isRedirectLoop;


    // ################# robotTxt #######################
    const allowed = false;
    const matchedRule = false;
    const matchedUserAgent = false;

    // ################### internal link ########################
    const totalOutgoingLinks = gatherInfo.links.length;
    const totalIncomingLinks = gatherInfo.links.length;


    // ################### network ########################
    const dnsLookupTime = gatherInfo.networkInfo.dnsLookupTime;
    const tcpConnectTime = gatherInfo.networkInfo.tcpConnectTime;
    const tlsHandshakeTime = gatherInfo.networkInfo.tlsHandshakeTime;
    const timeToFirstByte = gatherInfo.networkInfo.timeToFirstByte;
    const totalResponseTime = gatherInfo.networkInfo.totalResponseTime;

    // ################### metaRobots ########################
    const metaRobots = gatherInfo.htmlHeader.meta.metaRobot;

    // ################### xRobotTag ########################
    const xRobotTag = gatherInfo.networkInfo.responseHeaders.xRobotsTag;

    // ################### canonicalUrl ########################
    const canonicalUrl = gatherInfo.htmlHeader.meta.Canonical.map(c => c.url);

    // ################### isInSiteMap ########################
    const isInSiteMap = gatherInfo.urlAnalyses.isInSitemap;

    return {
        url: {
            url,
            protocol,
            hostname,
            pathname
        },
        httpResponse: {
            statusCode,
            method,
            redirectChain,
            redirectCount,
            isRedirectLoop,
        },
        robotTxt: {
            allowed,
            matchedRule,
            matchedUserAgent
        },
        internalLink: {
            totalIncomingLinks,
            totalOutgoingLinks
        },
        network: {
            dnsLookupTime,
            tcpConnectTime,
            tlsHandshakeTime,
            timeToFirstByte,
            totalResponseTime
        },
        metaRobots,
        xRobotTag,
        canonicalUrl,
        isInSiteMap
    }
}
